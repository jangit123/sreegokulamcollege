<%-- 
    Document   : login
    Created on : Dec 12, 2013, 11:00:13 AM
    Author     : pranav
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib prefix="s" uri="/struts-tags"%>
<html lang="en">
    <head>
        <meta charset="utf-8">

        <title>Sree Gokulam Chit & Finance Co.Pvt.Ltd</title>

        <script>
            function clearMessage(){
                document.getElementById('message').innerHTML="";
            }
        </script>
        
        
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="assetslog/style.css">
    <!--<link rel="stylesheet" type="text/css" href="assetslog/colors/seagreen.css">-->
    <link rel="stylesheet" type="text/css" href="assetslog/colors/blue.css">
    
    <!-- JavaScripts -->
    <script type="text/javascript" src="assetslog/js/validation.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style type="text/css">
<!--
body {
 background-image:url(assetslog/images/bg13.jpg);
 background-repeat:repeat-x;
}
-->
</style></head>
    
    
    
    <body><div align="center" style="width:100%; background-image:url(assetslog/images/sgasc.png); background-repeat: no-repeat; background-position:center" ><center>
  

    <div id="flat-forms-pack">
        <div id="main" class="container">
          
            <div class="container-small">
                	 <s:form action="login.action" name="frm" theme="css_xhtml" cssClass="yForm" method="post">
                           
                	<!-- Heading / Welcome Message -->
                        
                    <div class="heading">
                        <p style="text-align: center"><font color="yellow"><strong><marquee behavior="alternate"> <s:property value="message"  /></marquee></strong></font></p>
                    </div>
                    
                    <!-- Global Notifications -->
                    <div id="global-success" style="visibility:hidden;"></div>
					<div id="global-error" style="visibility:hidden;"></div>
                    
                    <!-- Gradient Bar -->
                    <!--<div class="square-gradient-bar">
                        <div class="bar left one"></div>
                        <div class="bar two"></div>
                        <div class="bar three"></div>
                        <div class="bar four"></div>
                        <div class="bar five"></div>
                        <div class="bar six"></div>
                        <div class="bar seven"></div>
                    </div>-->

                    <!-- Form -->
                   
                        <form>
 
                        	<!-- Sub-Heading -->
                     	<div align="center" style="height:165px;"><!--   <img src="assetslog/logo-n.png" width="158" height="145">-->  </div>
                          <div class="social-separator">
                   	      <div class="login-separator-left"></div>
                            	<span class="lineor"></span>
                            	<div class="login-separator-right"></div>
                            </div>
                            
                            <!-- Form Login -->
                            <div id="username-field" class="field">
                                 <s:textfield id="username" name="username" required="required"  placeholder=" Username"/>
                                 
                            </div>
                            <div id="password-field" class="field">
                               <s:password id="password" name="password" required="required"  placeholder=" Password" /> 
                               
                            </div>
                            
                            <!-- Submit Button & Reset Password Redirect Link -->
                            <div class="row" align="center">
                                <div class="col-6 col-lg-6">
                                    <s:submit value="LOGIN" cssClass="button"/>       
                                </div>
                                    <font color="red"> <s:property value="echo" /></font>
                            </div>
                        </form>
                  
                    
                    <!-- Footer / Redirect to Register -->
                    
                   </s:form>
            </div>
            
            <div class="footnote">
                <h3 style="color: #DC4A38;">© Copyright 2017. Sree Gokulam Group of Companies  
                    	</h3>
                    </div>
        </div>
        
    </div>
     </center>
       </div>
</body>




    
</html>
