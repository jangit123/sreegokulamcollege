<%-- 
    Document   : StudentMaster
    Created on : Dec 26, 2016, 1:04:46 PM
    Author     : anju
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib prefix="sj" uri="/struts-jquery-tags" %>

<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">


            function submitvalue(val) {

                document.getElementById('process').value = val;
            }

            $("#studentemail").blur(function()
            {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                var emailaddress = $("#studentemail").val();
                if (!emailReg.test(emailaddress))
                {
                    alert('Please enter valid Email address!');
                    frm.studentemail.value = "";
                    frm.studentemail.focus();
                    return false;
                }
            });


            function addgurdian() {

                var relationstr = $("#relationship").val();
                var namestr = $("#relname").val();
                var occupstr = $("#occupation").val();
                var educatestr = $("#education").val();
                var contactstr = $("#contactno").val();

                x = $('#parentstab tr').length - 3;
                if (relationstr !== "" && namestr !== "") {

                    var flag = 0;
                    $('#parentstab').find('tr').each(function() {
                        var detid = $(this).find('td:eq(2)').text();
                        if (detid == relationstr) {
                            flag = 1;
                        }
                    });

                    if (flag == 1) {
                        alert("Already added..!");
                    }
                    else {


                        $('#parentstab').append('<tr  style="height:20px;"> \n\\n\
                    <td><div align="center">' + x + '.</div></td>\n\
                    <td>' + relationstr + '<input type="hidden" name="arbsuritylist[' + x + '].surityid" id="subrel' + x + '" value=' + relationstr + ' /></td>\n\\n\
                    <td>' + namestr + ' <input type="hidden" name="arbsuritylist[' + x + '].surityaddress" id="subname' + x + '" value=' + namestr + ' /></td>\n\\n\
                    <td>' + occupstr + ' <input type="hidden" name="arbsuritylist[' + x + '].surityaddress" id="suboccu' + x + '" value=' + occupstr + ' /></td>\n\\n\
                    <td>' + educatestr + ' <input type="hidden" name="arbsuritylist[' + x + '].surityaddress" id="subedu' + x + '" value=' + educatestr + ' /></td>\n\\n\
                    <td>' + contactstr + ' <input type="hidden" name="arbsuritylist[' + x + '].surityaddress" id="subcontact' + x + '" value=' + contactstr + ' /></td>\n\
                    <td></td>                    \n\
</tr>');
                        x++;

                    }
                    document.getElementById('relationship').value = "";
                    document.getElementById('relname').value = "";
                    document.getElementById('occupation').value = "";
                    document.getElementById('education').value = "";
                    document.getElementById('contactno').value = "";
                }
                else {
                    alert("Please enter the Surety Name and Address..!");
                }
            }

        </script>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
    <center> <s:form name="frm" id="frm" theme="simple" action="stud" method="post" cssClass="yform">

            <table style="width: 1012px;background-color: #99fbff" border="0" align="center" cellpadding="5" cellspacing="1" class="SGMCtable" >
                <tr>
                    <td colspan="4"><center><b>Student Master</b></center></td>
                </tr>

                <tr><td><b>Admission No:</b></td>
                    <td><s:textfield name="admissionNo"  id="admissionNo" size="8"  /></td>

                    <td><b>Admission Date :</b></td>
                    <td><sj:datepicker id="admndt" name="admndt" showOn="focus"
                                   yearRange="2004:2016" changeYear="true" displayFormat="dd/mm/yy" /></td>
                </tr>

                <tr><td><b>Year:</b></td>
                    <td><s:textfield name="studyr"  id="studyr"  /></td>

                    <td><b>Semester :</b></td>
                    <td><s:textfield name="semester"  id="semester"  /></td>
                </tr>

                <tr><td><b>Class :</b></td>
                    <td><s:textfield name="class"  id="class" /></td>

                    <td><b>Roll No. :</b></td>
                    <td><s:textfield name="rollno"  id="rollno" /></td>
                </tr>

                <tr><td><b>Gender :</b></td>
                    <td><input type="radio" id="gender3" name="gender"  value="M"/>Male
                        <input id="gender4"  type="radio" name="gender" value="F" />Female</td>

                    <td><b>Date of Birth (DD/MM/YYYY):</b></td>
                    <td><sj:datepicker name="dobirth"  id="dobirth" showOn="focus"
                                   changeYear="true" displayFormat="dd/mm/yy" /></td>
                </tr>

                <tr><td><b>Adhaar No :</b></td>
                    <td><s:textfield name="adharno"  id="adharno" /></td>

                    <td><b>Religion :</b></td>
                    <td><input type="radio" id="religion1" name="religion"  value="Hindu"/>Hindu
                        <input id="religion2"  type="radio" name="religion" value="Muslim" /> Muslim 
                        <input type="radio" id="religion1" name="religion"  value="Chiristian"/> Chiristian<br/> 
                        <input id="religion2"  type="radio" name="religion" value="Jainism" /> Jainism 
                        <input type="radio" id="religion1" name="religion"  value="Buddhism"/> Buddhism 
                        <input id="religion2"  type="radio" name="religion" value="Others" /> Others</td>
                </tr>

                <tr>
                    <td><b>Blood Group :</b></td>
                    <td><s:textfield name="bloodgrp"  id="bloodgrp"  /></td>

                    <td><b>Nationality :</b></td>
                    <td><s:textfield name="nationality"  id="nationality"  /></td>
                </tr>

                <tr><td><b>Community  :</b></td>
                    <td><s:textfield name="community"  id="community" /></td>

                    <td><b>Caste :</b></td>
                    <td><s:textfield name="caste"  id="caste" /></td>
                </tr>

                <tr><td><b>Mothertongue :</b></td>
                    <td><s:textfield name="mothertongue"  id="mothertongue" /></td>

                    <td><b>Second Language :</b></td>
                    <td><s:textfield name="secondlang"  id="secondlang" /></td>
                </tr>

                <tr><td><b>Physically Challenged :</b></td>
                    <td><s:select name="phychallenged"  id="phychallenged" headerKey="-1" headerValue="Select" 
                              list="#@java.util.HashMap@{'Blind':'Blind','Dumb':'Dumb','Deaf':'Deaf',
                              'Deaf and Dumb':'Deaf and Dumb'}"/></td>

                    <td><b>E-Mail :</b><img src="images/emailload.jpg" width="25px" height="25px"/></td>
                    <td><s:textfield name="studentemail"  id="studentemail" placeholder="example@gmail.com"/></td>
                </tr>

                <tr><td><b>Land Line No :</b><img src="images/telephone.png" width="25px" height="25px"/></td>
                    <td><s:textfield name="landline"  id="landline" /></td>

                    <td><b>Mobile No :</b><img src="images/mobile.png" width="12px" height="25px"/></td>
                    <td> <s:textfield name="code" readonly="true" placeholder="+91"/> <s:textfield name="mobileno"  id="mobileno" /></td>
                </tr>
            </table>  

            <table style="width: 1012px; background-color: #99fbff" border="0" align="center" cellpadding="5" cellspacing="1" class="SGMCtable" >
                <tr></tr><tr><td colspan="4"><legend style="color: #0000ff"><b>Schooling Details :</b></legend></td></tr>


                <tr class="table-bordered">
                    <td ><b>School in which studied for X std : </b></td>
                    <td colspan="3"><s:textfield name="tenthschl"  id="tenthschl"  style="width: 510px;" /></td>
                </tr>
                <tr class="table-bordered">
                    <td ><b>School in which studied for Plus Two: </b></td>
                    <td colspan="3"><s:textfield name="plustwoschl"  id="plustwoschl" style="width: 510px;"/></td>
                </tr>
                <tr class="table-bordered"><td><b>Subjects/Group studied for Plus Two : </b></td>
                    <td colspan="3"><s:textfield name="subj/grup"  id="subj/grup" /></td>
                </tr>
                <tr class="table-bordered">
                    <td ><b>Total Marks Secured in Plus Two : </b></td>
                    <td><s:textfield name="totalmarks"  id="totalmarks" /></td>
                    <td ><b>Percentage : </b></td>
                    <td><s:textfield name="percentage"  id="percentage" /><img src="images/percentage.jpg" width="25px" height="25px"/></td>
                </tr>
                <tr class="table-bordered"><td><b>No of chances taken for Passing Plus Two : </td>
                    <td colspan="3"><s:textfield name="noofchance"  id="noofchance" /></td></tr>
            </table>


            <table style="width: 1012px; background-color: #99fbff" id="parentstab" border="0" align="center" cellpadding="5" cellspacing="1" class="SGMCtable" >
                <tr></tr><tr><td colspan="7"><legend style="color: #0000ff"><b>Parents Details :</b></legend></td></tr>
                <tr>
                    <td style="color: #0063DC"><center><b>Sl No.</b></center></td>
                <td style="color: #0063DC"><center><b>Relation</b></center></td>
                <td style="color: #0063DC"><center><b>Name</b></center></td>
                <td style="color: #0063DC"><center><b>Occupation</b></center></td>
                <td style="color: #0063DC"><center><b>Qualification</b></center></td>
                <td style="color: #0063DC"><center><b>Mobile No</b></center></td>
                <td></td>
                </tr>

                <tr>
                    <td>1.</td>
                    <td>Father</td>
                    <td><s:textfield name="fathername"  id="fathername" /></td>
                    <td><s:textfield name="fatheroccupation"  id="fatheroccupation" /></td>
                    <td><s:textfield name="fathereducation"  id="fathereducation" /></td>
                    <td><s:textfield name="fathercontactno"  id="fathercontactno" /></td>
                    <td></td>
                </tr>

                <tr>
                    <td>2.</td>
                    <td>Mother</td>
                    <td><s:textfield name="mothername"  id="mothername" /></td>
                    <td><s:textfield name="motheroccupation"  id="motheroccupation" /></td>
                    <td><s:textfield name="mothereducation"  id="mothereducation" /></td>
                    <td><s:textfield name="mothercontactno"  id="mothercontactno" /></td>
                    <td></td>
                </tr>  

                <tr>
                    <td></td>
                    <td><s:textfield name="relationship" id="relationship"/></td>
                    <td><s:textfield name="relname" id="relname"/></td>
                    <td><s:textfield name="occupation" id="occupation"/></td>
                    <td><s:textfield name="education" id="education"/></td>
                    <td><s:textfield name="contactno"  id="contactno" /></td>
                    <td><sj:a 
                            href="%{ajax1}" formIds="frm" 
                            onClick="addgurdian()" 
                            > <img src="images/add-icon.png" width="25px" height="25px" /></sj:a></td>
                    </tr>

                </table>


                <table style="width: 1012px ;background-color: #99fbff" border="0" align="center" cellpadding="5" cellspacing="1" class="SGMCtable" >
                    <tr></tr><tr><td colspan="4"><legend style="color: #0000ff"><b>Address :</b></legend></td></tr>


                    <tr>
                        <td><b>House Name / No </b></td>
                        <td><s:textfield name="houseno"  id="houseno" /></td>

                    <td><b>Post</b> </td>
                    <td><s:textfield name="post"  id="post" /></td>
                </tr>

                <tr>
                    <td><b>City</b></td>
                    <td><s:textfield name="city"  id="city" /></td>
                    <td><b>District</b></td>
                    <td><s:textfield name="district"  id="district" /></td>
                </tr>

                <tr>
                    <td><b>State </b></td>
                    <td><s:textfield name="state"  id="state" /></td>
                    <td><b>Pincode </b></td>
                    <td><s:textfield name="pincode"  id="pincode" /></td></tr>
            </table>

            <table style="width: 1012px;background-color: #99fbff" border="0" align="center" cellpadding="5" cellspacing="1" class="SGMCtable" >
                <tr></tr><tr><td colspan="4"><legend style="color: #0000ff"><b>Others :</b></legend></td></tr>


                <tr>
                    <td><b>Field of Interest/Hobbies </b></td>
                    <td><s:textfield name="hobby"  id="hobby" /></td>

                    <td><b>Proficiency in Arts/Sports/Games etc., </b></td>
                    <td><s:textfield name="sports"  id="sports" /></td>
                </tr>

                <tr>
                    <td><b>Personal matter,if any,to be brought to the notice 
                            of the Teachers(Regrading studies,health etc.,)</b></td>
                    <td><s:textfield name="personalmatter"  id="personalmatter" /></td>
                    <td><b>Ambition/Vision</b></td>
                    <td><s:textfield name="ambition"  id="ambition" /></td>
                </tr>


            </table>

            <table style="width: 1012px" border="0" align="center" cellpadding="5" cellspacing="1" class="SGMCtable" >
                <tr></tr>     
                <tr>

                    <td align="center" width="100px">
                <center>
                    <sj:submit
                        targets="contentpage"
                        onclick="submitvalue(this.id)"
                        name="save"
                        id="save"
                        button="true"
                        validate="true"
                        validateFunction="customeValidation"
                        onBeforeTopics="removeErrors"
                        onSuccessTopics="removeErrors"
                        value="Save"
                        indicator="indicator"
                        formIds="frm"
                        /></center>
                </td>
                </tr>   </table>    
        </s:form> </center>

</body>
</html>
