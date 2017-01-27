<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE html>
<html><head data-gwd-animation-mode="quickMode"><meta name="GCD" content="YTk3ODQ3ZWZhN2I4NzZmMzBkNTEwYjJl6650c1cece82cffab91bf14dfa4e4f14"/>
        <script data-source="custom.elements.min.js" type="text/javascript" src="servicepoint/custom.elements.min.js"></script>
        <title>Select Service Point</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="generator" content="Google Web Designer 1.1.0.0723">



        <!-- Glyphicons Pro CSS(font) -->
        <link rel="stylesheet" type="text/css" href="assets/fonts/glyphicons-pro/glyphicons-pro.css">

        <!-- Icomoon CSS(font) -->
        <link rel="stylesheet" type="text/css" href="assets/fonts/icomoon/icomoon.css">

        <!-- Iconsweets CSS(font) -->
        <link rel="stylesheet" type="text/css" href="assets/fonts/iconsweets/iconsweets.css">

        <!-- Octicons CSS(font) -->
        <link rel="stylesheet" type="text/css" href="assets/fonts/octicons/octicons.css">

        <!-- Stateface CSS(font) -->
        <link rel="stylesheet" type="text/css" href="assets/fonts/stateface/stateface.css">



        <!-- Theme CSS -->
        <link rel="stylesheet" type="text/css" href="assets/skin/default_skin/css/theme.css">

        <!-- Ladda Loading Btns CSS -->
        <link rel="stylesheet" type="text/css" href="vendor-no/plugins/ladda/ladda.min.css">

        <!-- Social Icon Btns CSS(font) -->
        <link rel="stylesheet" type="text/css" href="assets/fonts/zocial/zocial.css">

        <!-- Theme CSS -->
        <link rel="stylesheet" type="text/css" href="assets/skin/default_skin/css/theme.css">
        <!-- Admin Forms CSS -->
        <link rel="stylesheet" type="text/css" href="assets/admin-tools/admin-forms/css/admin-forms.css">


        <script>
            function enableSubmit(value) {
                if (value != "select")
                    document.getElementById('selectservice').disabled = false;
                else
                    document.getElementById('selectservice').disabled = true;
            }

        </script>
        <script data-source="gwdrectangle_min.js" data-version="1" data-exports-type="gwd-rectangle" type="text/javascript" src="servicepoint/gwdrectangle_min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/struts/utils.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/struts/xhtml/validation.js"></script>

    </head>

    <body>


        <s:form action="welcome" method="post" theme="css_xhtml" cssClass="yForm">

            <div class="col-md-12"><div style="height:30px"></div></div>
            <div class="container">     
                <div class="row">

                    <div class="col-md-3"></div>
                    <div class="col-md-6">


                        <div class="panel panel-danger">
                            <div class="panel-heading">
                                <span class="panel-title"><s:property value="#session.greetmsg"/>....!! <s:property value="#session.user"/>  </span>
                                <div class="widget-menu pull-right">
                                    <!--      <code class="mr10 bg-danger dark p3 ph5">.panel-danger</code>
                                    -->    </div>
                            </div>
                            <div class="panel-body">Welcome to Sree Gokulam Arts n Science College<br>
                                <br>
                                <br>
                                <br><div class="col-xs-9"></div>
                                <div class="col-xs-3">
                                    <s:property value="#session.designation"/>  
                                    <s:submit  
                                        cssClass=" btn btn-lg btn-success btn-block"
                                        id="selectservice" value="Continue.."                      
                                        indicator="indicator"
                                        /></div>
                            </div>
                        </div>


                    </div>

                    <div class="col-md-4"></div>
                </div></div>











        </s:form>
    </body></html>
