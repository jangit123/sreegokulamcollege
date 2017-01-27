function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateLoginForm() {
    var email = document.forms["login_form"]["email"].value,
    password = document.forms["login_form"]["password"].value;
	if(email == null || email == "") {
	     document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your email address.</p>';
	   }else if(!validateEmail(email)){
		 document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> This email address is invalid.</p>';
	   }else{
	   	 document.getElementById('email').className = "";
	   	 document.getElementById('email-error').style.visibility = 'hidden';
	   	 document.getElementById('email-error').innerHTML = '';
	   }
	   
	if(password == null || password == "") {
	     errorMessage = "Enter your password.";
	     document.getElementById('password').className = "error"; 
	     document.getElementById('password-error').style.visibility = 'visible';
	     document.getElementById('password-error').innerHTML = '<p id="error-message" class="error-message"><span>Nope!</span> You are supposed to provide password.</p>';
	   }else{
	   	 document.getElementById('password').className = "";
	   	 document.getElementById('password-error').style.visibility = 'hidden';
	   	 document.getElementById('password-error').innerHTML = '';
	   }
}

function validateResetPasswordForm() {
    var email = document.forms["login_form"]["email"].value;
	if(email == null || email == "") {
	     document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your email address.</p>';
	   }else if(!validateEmail(email)){
		 document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> This email address is invalid.</p>';
	   }else{
	   	 document.getElementById('email').className = "";
	   	 document.getElementById('email-error').style.visibility = 'hidden';
	   	 document.getElementById('email-error').innerHTML = '';
	   	 document.getElementById('global-success').className = "global-alert success";
	   	 document.getElementById('global-success').style.visibility = 'visible';
	   	 document.getElementById('global-success').innerHTML = '<p><strong>Yao-Hoo!</strong> We have sent a new password to your email.</p>';
	   }
}

function validateSimpleRegisterForm() {
    var fullname = document.forms["login_form"]["fullname"].value,
    email = document.forms["login_form"]["email"].value,
    password = document.forms["login_form"]["password"].value,
    repassword = document.forms["login_form"]["repassword"].value,
    checkbox = document.getElementById("terms").checked,
    counter = 0;
    
    if(fullname == null || fullname == ""){
	    document.getElementById('fullname').className = "error"; 
	    document.getElementById('fullname-error').style.visibility = 'visible';
	    document.getElementById('fullname-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your full name.</p>';
	    counter = 1;
    } else{
	    document.getElementById('fullname').className = ""; 
	    document.getElementById('fullname-error').style.visibility = 'hidden';
	    document.getElementById('fullname-error').innerHTML = '';
    }
    
	if(email == null || email == "") {
	     document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your email address.</p>';
	     counter = 1;
	   }else if(!validateEmail(email)){
		 document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> This email address is invalid.</p>';
	     counter = 1;
	   }else{
	   	 document.getElementById('email').className = "";
	   	 document.getElementById('email-error').style.visibility = 'hidden';
	   	 document.getElementById('email-error').innerHTML = '';
	   }
	   
	if(password == null || password == ""){
		document.getElementById('password').className = "error"; 
	    document.getElementById('password-error').style.visibility = 'visible';
	    document.getElementById('password-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> You are supossed to enter password.</p>';
	    counter = 1;
	} else {
		document.getElementById('password').className = ""; 
	    document.getElementById('password-error').style.visibility = 'hidden';
	    document.getElementById('password-error').innerHTML = '';
	}
	
	if(repassword == null || repassword == ""){
		document.getElementById('repassword').className = "error"; 
	    document.getElementById('repassword-error').style.visibility = 'visible';
	    document.getElementById('repassword-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> You are supossed to re-type the password.</p>';
	    counter = 1;
	} else if(repassword !== password) {
		document.getElementById('repassword').className = "error"; 
	    document.getElementById('repassword-error').style.visibility = 'visible';
	    document.getElementById('repassword-error').innerHTML = '<p id="error-message" class="error-message"><span>Nope!</span> Your passwords do not match.</p>';
	    counter = 1;
	} else {
		document.getElementById('repassword').className = ""; 
	    document.getElementById('repassword-error').style.visibility = 'hidden';
	    document.getElementById('repassword-error').innerHTML = '';
	}
	
	if(checkbox == false){
		document.getElementById('global-error').className = "global-alert error";
	   	document.getElementById('global-error').style.visibility = 'visible';
	   	document.getElementById('global-error').innerHTML = '<p><strong>Hold on!</strong> You must agree to our Terms of Service and Privacy Policy in order to register.</p>';
	   	counter = 1;
	} else {
		document.getElementById('global-error').className = "";
	   	document.getElementById('global-error').style.visibility = 'hidden';
	   	document.getElementById('global-error').innerHTML = '';
	}
	
	if(counter == 0){
		document.getElementById('global-success').className = "global-alert success";
	   	document.getElementById('global-success').style.visibility = 'visible';
	   	document.getElementById('global-success').innerHTML = '<p><strong>Yao-Hoo!</strong> You have successfully registered.</p>';
	}	
}

function validateNormalRegisterForm() {
    var fullname = document.forms["login_form"]["fullname"].value,
    country = document.getElementById("country").selectedIndex,
    relationship = document.getElementById("relationship").selectedIndex,
    day = document.getElementById("day").selectedIndex,
    month = document.getElementById("month").selectedIndex,
    year = document.getElementById("year").selectedIndex,
    email = document.forms["login_form"]["email"].value,
    password = document.forms["login_form"]["password"].value,
    repassword = document.forms["login_form"]["repassword"].value,
    checkbox = document.getElementById("terms").checked,
    counter = 0;
    
    if(fullname == null || fullname == ""){
	    document.getElementById('fullname').className = "error"; 
	    document.getElementById('fullname-error').style.visibility = 'visible';
	    document.getElementById('fullname-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your full name.</p>';
	    counter = 1;
    } else{
	    document.getElementById('fullname').className = ""; 
	    document.getElementById('fullname-error').style.visibility = 'hidden';
	    document.getElementById('fullname-error').innerHTML = '';
    }
    
    if(country == null || country == ""){
	    document.getElementById('countrydiv').className = "form-element error"; 
	    document.getElementById('country-error').style.visibility = 'visible';
	    document.getElementById('country-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your country.</p>';
	    counter = 1;
    } else {
	    document.getElementById('countrydiv').className = "form-element"; 
	    document.getElementById('country-error').style.visibility = 'hidden';
	    document.getElementById('country-error').innerHTML = '';
    }
    
    if(relationship == null || relationship == ""){
	    document.getElementById('relationshipdiv').className = "form-element error"; 
	    document.getElementById('relationship-error').style.visibility = 'visible';
	    document.getElementById('relationship-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your relationship status.</p>';
	    counter = 1;
    } else {
	    document.getElementById('relationshipdiv').className = "form-element"; 
	    document.getElementById('relationship-error').style.visibility = 'hidden';
	    document.getElementById('relationship-error').innerHTML = '';
    }
    
    if(day == null || day == ""){
	    document.getElementById('daydiv').className = "form-element error"; 
	    document.getElementById('day-error').style.visibility = 'visible';
	    document.getElementById('day-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your day of birth.</p>';
	    counter = 1;
    } else {
	    document.getElementById('daydiv').className = "form-element"; 
	    document.getElementById('day-error').style.visibility = 'hidden';
	    document.getElementById('day-error').innerHTML = '';
    }
    
    if(month == null || month == ""){
	    document.getElementById('monthdiv').className = "form-element error"; 
	    document.getElementById('month-error').style.visibility = 'visible';
	    document.getElementById('month-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your month of birth.</p>';
	    counter = 1;
    } else {
	    document.getElementById('monthdiv').className = "form-element"; 
	    document.getElementById('month-error').style.visibility = 'hidden';
	    document.getElementById('month-error').innerHTML = '';
    }
    
    if(year == null || year == ""){
	    document.getElementById('yeardiv').className = "form-element error"; 
	    document.getElementById('year-error').style.visibility = 'visible';
	    document.getElementById('year-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your year of birth.</p>';
	    counter = 1;
    } else {
	    document.getElementById('yeardiv').className = "form-element"; 
	    document.getElementById('year-error').style.visibility = 'hidden';
	    document.getElementById('year-error').innerHTML = '';
    }
    
	if(email == null || email == "") {
	     document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your email address.</p>';
	     counter = 1;
	   }else if(!validateEmail(email)){
		 document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> This email address is invalid.</p>';
	     counter = 1;
	   }else{
	   	 document.getElementById('email').className = "";
	   	 document.getElementById('email-error').style.visibility = 'hidden';
	   	 document.getElementById('email-error').innerHTML = '';
	   }
	   
	if(password == null || password == ""){
		document.getElementById('password').className = "error"; 
	    document.getElementById('password-error').style.visibility = 'visible';
	    document.getElementById('password-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> You are supossed to enter password.</p>';
	    counter = 1;
	} else {
		document.getElementById('password').className = ""; 
	    document.getElementById('password-error').style.visibility = 'hidden';
	    document.getElementById('password-error').innerHTML = '';
	}
	
	if(repassword == null || repassword == ""){
		document.getElementById('repassword').className = "error"; 
	    document.getElementById('repassword-error').style.visibility = 'visible';
	    document.getElementById('repassword-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> You are supossed to re-type the password.</p>';
	    counter = 1;
	} else if(repassword !== password) {
		document.getElementById('repassword').className = "error"; 
	    document.getElementById('repassword-error').style.visibility = 'visible';
	    document.getElementById('repassword-error').innerHTML = '<p id="error-message" class="error-message"><span>Nope!</span> Your passwords do not match.</p>';
	    counter = 1;
	} else {
		document.getElementById('repassword').className = ""; 
	    document.getElementById('repassword-error').style.visibility = 'hidden';
	    document.getElementById('repassword-error').innerHTML = '';
	}
	
	if(checkbox == false){
		document.getElementById('global-error').className = "global-alert error";
	   	document.getElementById('global-error').style.visibility = 'visible';
	   	document.getElementById('global-error').innerHTML = '<p><strong>Hold on!</strong> You must agree to our Terms of Service and Privacy Policy in order to register.</p>';
	   	counter = 1;
	} else {
		document.getElementById('global-error').className = "";
	   	document.getElementById('global-error').style.visibility = 'hidden';
	   	document.getElementById('global-error').innerHTML = '';
	}
	
	if(counter == 0){
		document.getElementById('global-success').className = "global-alert success";
	   	document.getElementById('global-success').style.visibility = 'visible';
	   	document.getElementById('global-success').innerHTML = '<p><strong>Yao-Hoo!</strong> You have successfully registered.</p>';
	}	
}

function validateAdvancedRegisterForm() {
    var fname = document.forms["login_form"]["fname"].value,
    lname = document.forms["login_form"]["lname"].value,
    country = document.getElementById("country").selectedIndex,
    relationship = document.getElementById("relationship").selectedIndex,
    day = document.getElementById("day").selectedIndex,
    month = document.getElementById("month").selectedIndex,
    year = document.getElementById("year").selectedIndex,
    email = document.forms["login_form"]["email"].value,
    password = document.forms["login_form"]["password"].value,
    repassword = document.forms["login_form"]["repassword"].value,
    valid = false,
    radios = document.getElementsByName("paymentway"),
    cardnumber = document.forms["login_form"]["cardnumber"].value,
    postal = document.forms["login_form"]["postal"].value,
    cvv = document.forms["login_form"]["cvv"].value,
    cardmonth = document.getElementById("cardmonth").selectedIndex,
    cardyear = document.getElementById("cardyear").selectedIndex,
    counter = 0;
    
    if(fname == null || fname == ""){
	    document.getElementById('fname').className = "error"; 
	    document.getElementById('fname-error').style.visibility = 'visible';
	    document.getElementById('fname-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your full name.</p>';
	    counter = 1;
    } else{
	    document.getElementById('fname').className = ""; 
	    document.getElementById('fname-error').style.visibility = 'hidden';
	    document.getElementById('fname-error').innerHTML = '';
    }
    
    if(lname == null || lname == ""){
	    document.getElementById('lname').className = "error"; 
	    document.getElementById('lname-error').style.visibility = 'visible';
	    document.getElementById('lname-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your full name.</p>';
	    counter = 1;
    } else{
	    document.getElementById('lname').className = ""; 
	    document.getElementById('lname-error').style.visibility = 'hidden';
	    document.getElementById('lname-error').innerHTML = '';
    }
    
    if(country == null || country == ""){
	    document.getElementById('countrydiv').className = "form-element error"; 
	    document.getElementById('country-error').style.visibility = 'visible';
	    document.getElementById('country-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your country.</p>';
	    counter = 1;
    } else {
	    document.getElementById('countrydiv').className = "form-element"; 
	    document.getElementById('country-error').style.visibility = 'hidden';
	    document.getElementById('country-error').innerHTML = '';
    }
    
    if(relationship == null || relationship == ""){
	    document.getElementById('relationshipdiv').className = "form-element error"; 
	    document.getElementById('relationship-error').style.visibility = 'visible';
	    document.getElementById('relationship-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your relationship status.</p>';
	    counter = 1;
    } else {
	    document.getElementById('relationshipdiv').className = "form-element"; 
	    document.getElementById('relationship-error').style.visibility = 'hidden';
	    document.getElementById('relationship-error').innerHTML = '';
    }
    
    if(day == null || day == ""){
	    document.getElementById('daydiv').className = "form-element error"; 
	    document.getElementById('day-error').style.visibility = 'visible';
	    document.getElementById('day-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your day of birth.</p>';
	    counter = 1;
    } else {
	    document.getElementById('daydiv').className = "form-element"; 
	    document.getElementById('day-error').style.visibility = 'hidden';
	    document.getElementById('day-error').innerHTML = '';
    }
    
    if(month == null || month == ""){
	    document.getElementById('monthdiv').className = "form-element error"; 
	    document.getElementById('month-error').style.visibility = 'visible';
	    document.getElementById('month-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your month of birth.</p>';
	    counter = 1;
    } else {
	    document.getElementById('monthdiv').className = "form-element"; 
	    document.getElementById('month-error').style.visibility = 'hidden';
	    document.getElementById('month-error').innerHTML = '';
    }
    
    if(year == null || year == ""){
	    document.getElementById('yeardiv').className = "form-element error"; 
	    document.getElementById('year-error').style.visibility = 'visible';
	    document.getElementById('year-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your year of birth.</p>';
	    counter = 1;
    } else {
	    document.getElementById('yeardiv').className = "form-element"; 
	    document.getElementById('year-error').style.visibility = 'hidden';
	    document.getElementById('year-error').innerHTML = '';
    }
    
	if(email == null || email == "") {
	     document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your email address.</p>';
	     counter = 1;
	   }else if(!validateEmail(email)){
		 document.getElementById('email').className = "error"; 
	     document.getElementById('email-error').style.visibility = 'visible';
	     document.getElementById('email-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> This email address is invalid.</p>';
	     counter = 1;
	   }else{
	   	 document.getElementById('email').className = "";
	   	 document.getElementById('email-error').style.visibility = 'hidden';
	   	 document.getElementById('email-error').innerHTML = '';
	   }
	   
	if(password == null || password == ""){
		document.getElementById('password').className = "error"; 
	    document.getElementById('password-error').style.visibility = 'visible';
	    document.getElementById('password-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> You are supossed to enter password.</p>';
	    counter = 1;
	} else {
		document.getElementById('password').className = ""; 
	    document.getElementById('password-error').style.visibility = 'hidden';
	    document.getElementById('password-error').innerHTML = '';
	}
	
	if(repassword == null || repassword == ""){
		document.getElementById('repassword').className = "error"; 
	    document.getElementById('repassword-error').style.visibility = 'visible';
	    document.getElementById('repassword-error').innerHTML = '<p id="error-message" class="error-message"><span>Arghh!</span> You are supossed to re-type the password.</p>';
	    counter = 1;
	} else if(repassword !== password) {
		document.getElementById('repassword').className = "error"; 
	    document.getElementById('repassword-error').style.visibility = 'visible';
	    document.getElementById('repassword-error').innerHTML = '<p id="error-message" class="error-message"><span>Nope!</span> Your passwords do not match.</p>';
	    counter = 1;
	} else {
		document.getElementById('repassword').className = ""; 
	    document.getElementById('repassword-error').style.visibility = 'hidden';
	    document.getElementById('repassword-error').innerHTML = '';
	}
	
	var i = 0;
    while (!valid && i < radios.length) {
       if (radios[i].checked) {
            valid = true;
        }
        i++;
    }
	
	if(!valid){
		document.getElementById('global-error').className = "global-alert error";
	   	document.getElementById('global-error').style.visibility = 'visible';
	   	document.getElementById('global-error').innerHTML = '<p><strong>Auchh!</strong> You are supossed to select a payment gateway.</p>';
	   	counter = 1;
	} else{
		document.getElementById('global-error').className = "";
	   	document.getElementById('global-error').style.visibility = 'hidden';
	   	document.getElementById('global-error').innerHTML = '';
	}
	
	if(cardnumber == null || cardnumber == ""){
	    document.getElementById('cardnumber').className = "error"; 
	    document.getElementById('cardnumber-error').style.visibility = 'visible';
	    document.getElementById('cardnumber-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your card number.</p>';
	    counter = 1;
    } else{
	    document.getElementById('cardnumber').className = ""; 
	    document.getElementById('cardnumber-error').style.visibility = 'hidden';
	    document.getElementById('cardnumber-error').innerHTML = '';
    }
    
    if(postal == null || postal == ""){
	    document.getElementById('postal').className = "error"; 
	    document.getElementById('postal-error').style.visibility = 'visible';
	    document.getElementById('postal-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your postal/zip.</p>';
	    counter = 1;
    } else{
	    document.getElementById('postal').className = ""; 
	    document.getElementById('postal-error').style.visibility = 'hidden';
	    document.getElementById('postal-error').innerHTML = '';
    }
    
    if(cvv == null || cvv == ""){
	    document.getElementById('cvv').className = "error"; 
	    document.getElementById('cvv-error').style.visibility = 'visible';
	    document.getElementById('cvv-error').innerHTML = '<p id="error-message" class="error-message"><span>Oopps!</span> Please, enter your 3-digits CVV code.</p>';
	    counter = 1;
    } else{
	    document.getElementById('cvv').className = ""; 
	    document.getElementById('cvv-error').style.visibility = 'hidden';
	    document.getElementById('cvv-error').innerHTML = '';
    }
    
    if(cardmonth == null || cardmonth == ""){
	    document.getElementById('cardmonthdiv').className = "form-element error"; 
	    document.getElementById('cardmonth-error').style.visibility = 'visible';
	    document.getElementById('cardmonth-error').innerHTML = "<p id='error-message' class='error-message'><span>Oopps!</span> Please, enter your card's expiration month.</p>";
	    counter = 1;
    } else {
	    document.getElementById('cardmonthdiv').className = "form-element"; 
	    document.getElementById('cardmonth-error').style.visibility = 'hidden';
	    document.getElementById('cardmonth-error').innerHTML = '';
    }
    
    if(cardyear == null || cardyear == ""){
	    document.getElementById('cardyeardiv').className = "form-element error"; 
	    document.getElementById('cardyear-error').style.visibility = 'visible';
	    document.getElementById('cardyear-error').innerHTML = "<p id='error-message' class='error-message'><span>Oopps!</span> Please, enter your card's expiration year.</p>";
	    counter = 1;
    } else {
	    document.getElementById('cardyeardiv').className = "form-element"; 
	    document.getElementById('cardyear-error').style.visibility = 'hidden';
	    document.getElementById('cardyear-error').innerHTML = '';
    }
	
	if(counter == 0){
		document.getElementById('global-success').className = "global-alert success";
	   	document.getElementById('global-success').style.visibility = 'visible';
	   	document.getElementById('global-success').innerHTML = '<p><strong>Yao-Hoo!</strong> You have successfully registered.</p>';
	}	
}