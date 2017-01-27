<%-- 
    Document   : profiledetails
    Created on : 26 Jun, 2016, 8:44:58 PM
    Author     : SREE
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>My Profile</title>
        <script>
            function calltabstatus(admn) {

                $("#showfees").hide(500);

                $.ajax({
                    url: '<s:url action='feespaidview'/>', // action to be perform
                    type: 'POST', //type of posting the data
                    data: {admno: admn}, // data to set to Action Class
                    dataType: 'html',
                    success: function(html) {
                        $("#showfees").show(500);
                        $('#showfees').html(html); //set result.jsp output to leftDiv 
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('An error occurred! ' + thrownError);
                    }
                });
            }

            function callsubjstatus(admn) {

                $("#showsubjects").hide(500);

                $.ajax({
                    url: '<s:url action='subjectsview'/>', // action to be perform
                    type: 'POST', //type of posting the data
                    data: {admno: admn}, // data to set to Action Class
                    dataType: 'html',
                    success: function(html) {
                        $("#showsubjects").show(500);
                        $('#showsubjects').html(html); //set result.jsp output to leftDiv 
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('An error occurred! ' + thrownError);
                    }
                });
            }

            function callgrade(admn) {

                $("#showgrade").hide(500);

                $.ajax({
                    url: '<s:url action='gradelistview'/>', // action to be perform
                    type: 'POST', //type of posting the data
                    data: {admno: admn}, // data to set to Action Class
                    dataType: 'html',
                    success: function(html) {
                        $("#showgrade").show(500);
                        $('#showgrade').html(html); //set result.jsp output to leftDiv 
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('An error occurred! ' + thrownError);
                    }
                });
            }


            function callatt(admn) {

                $("#showattdtls").hide(500);

                $.ajax({
                    url: '<s:url action='attendancedtlsview'/>', // action to be perform
                    type: 'POST', //type of posting the data
                    data: {admno: admn}, // data to set to Action Class
                    dataType: 'html',
                    success: function(html) {
                        $("#showattdtls").show(500);
                        $('#showattdtls').html(html); //set result.jsp output to leftDiv 
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('An error occurred! ' + thrownError);
                    }
                });
            }



        </script>

    </head>
    <body>
        <div class="tab-content p30" style="height: 730px;">
            <div id="tab11" class="tab-pane active">


                <section id="content" class="animated fadeIn">
                    <!-- Begin .page-heading -->
                    <div class="page-heading">
                        <div class="media clearfix">
                            <div class="media-left pr30">
                                <a href="#">
                                    <img class="media-object mw150" src="images/<s:property value="%{studentmasterlist[0][23]}" />/<s:property value="%{studentmasterlist[0][0]}" />.JPG" width="60" height="80" alt="...">
                                </a>
                            </div>                      
                            <div class="media-body va-m">
                                <h2 class="media-heading"><s:property value="%{studentmasterlist[0][1]}" />
                                    <small> - Profile</small>
                                </h2>
                                <p class="lead"><s:property value="%{studentmasterlist[0][22]}" /> </p>

                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="panel">
                                <div class="panel-heading">
                                    <span class="panel-icon">
                                        <i class="fa fa-star"></i>
                                    </span>
                                    <span class="panel-title"> User Popularity</span>
                                </div>
                                <div class="panel-body pn">
                                    <table class="table mbn tc-icon-1 tc-med-2 tc-bold-last">
                                        <thead>
                                            <tr class="hidden">
                                                <th class="mw30">#</th>
                                                <th>First Name</th>
                                                <th>Revenue</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span class="fa fa-desktop text-warning"></span>
                                                </td>
                                                <td>School Grade</td>
                                                <td>
                                                    <i class="fa fa-caret-up text-info pr10"></i>4 th</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fa fa-microphone text-primary"></span>
                                                </td>
                                                <td>Class Teacher</td>
                                                <td>
                                                    <i class="fa fa-caret-down text-danger pr10"></i> <s:property value="%{studentmasterlist[0][32]}" /></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fa fa-newspaper-o text-info"></span>
                                                </td>
                                                <td>News : </td>
                                                <td>
                                                    <i class="fa fa-caret-up text-info pr10"></i>Welcome to Online Portal</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="panel-heading">
                                    <span class="panel-icon">
                                        <i class="fa fa-trophy"></i>
                                    </span>
                                    <span class="panel-title"> Extracurricular Activities </span>
                                </div>
                                <div class="panel-body pb5">
                                    <span class="label label-warning mr5 mb10 ib lh15">Art</span>
                                    <span class="label label-primary mr5 mb10 ib lh15">Sports</span>
                                    <span class="label label-info mr5 mb10 ib lh15">French Club</span>
                                    <span class="label label-success mr5 mb10 ib lh15">Speech Team</span>
                                    <span class="label label-alert mr5 mb10 ib lh15">Dance</span>
                                    <span class="label label-system mr5 mb10 ib lh15">Music</span>
                                    <span class="label label-info mr5 mb10 ib lh15">Martial Arts</span>
                                    <span class="label label-success mr5 mb10 ib lh15">Swimming</span>
                                    <span class="label label-primary mr5 mb10 ib lh15">NCC</span>
                                    <span class="label label-system mr5 mb10 ib lh15">NSS</span>


                                </div>
                            </div>
                            <div class="panel">
                                <div class="panel-heading">
                                    <span class="panel-icon">
                                        <i class="fa fa-pencil"></i>
                                    </span>
                                    <span class="panel-title">Parent Information</span>
                                </div>
                                <div class="panel-body pb5">

                                    <h6>Mother</h6>

                                    <h4>Mrs.<s:property value="%{studentmasterlist[0][11]}" /></h4>
                                    <p class="text-muted"><s:property value="%{studentmasterlist[0][19]}" />&nbsp;<s:property value="%{studentmasterlist[0][21]}" />
                                        <br> Phone : <s:property value="%{studentmasterlist[0][13]}" />
                                        <br> Mail  : mrs@gmail.com
                                    </p>

                                    <hr class="short br-lighter">

                                    <h6>Father</h6>
                                    <h4>Mr : <s:property value="%{studentmasterlist[0][10]}" /></h4>
                                    <p class="text-muted"><s:property value="%{studentmasterlist[0][18]}" />&nbsp;<s:property value="%{studentmasterlist[0][20]}" />
                                        <br> Phone : <s:property value="%{studentmasterlist[0][12]}" />
                                        <br> Mail  : mr@gmail.com
                                    </p>

                                    <hr class="short br-lighter">

                                    <h6>Guardian </h6>

                                    <h4>Mr/Mrs. <s:property value="%{studentmasterlist[0][25]}" /></h4>
                                    <p class="text-muted" <s:property value="%{studentmasterlist[0][26]}" />
                                       <br> Phone :  <s:property value="%{studentmasterlist[0][27]}" />
                                        <br> Mail  : mrs@gmail.com
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">

                            <div class="tab-block">
                                <ul class="nav nav-tabs">
                                    <li class="active">
                                        <a href="#tab1" data-toggle="tab">Profile</a>
                                    </li>
                                    <li>

                                        <a href="#tab2" data-toggle="tab" onClick="callgrade('<s:property value="%{studentmasterlist[0][0]}" />')">Grade View</a>
                                    </li>
                                    <li>

                                        <a href="#tab3" data-toggle="tab" onClick="callatt('<s:property value="%{studentmasterlist[0][0]}" />')">Attendance</a>

                                    </li>
                                    <li>
                                        <a href="#tab6" data-toggle="tab">Home Assignments</a>
                                    </li>

                                    <li>
                                        <a href="#tab4" data-toggle="tab" onClick="callsubjstatus('<s:property value="%{studentmasterlist[0][0]}" />')">Subject Teacher</a>
                                    </li>
                                    <li>
                                        <a href="#tab5" data-toggle="tab" onClick="calltabstatus('<s:property value="%{studentmasterlist[0][0]}" />')">Fees Status</a>
                                    </li>
                                </ul>
                                <div class="tab-content p30" style="height: 730px;">
                                    <div id="tab1" class="tab-pane active">




                                        <table class="table">
                                            <thead>

                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td align="left" valign="middle">1.</td>
                                                    <td align="left" valign="middle">Admission No</td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][0]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">2.</td>
                                                    <td align="left" valign="middle">Name</td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][1]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">3.</td>
                                                    <td align="left" valign="middle">Gender</td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][2]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">4.</td>
                                                    <td align="left" valign="middle">Date of Birth</td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][3]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">5.</td>
                                                    <td align="left" valign="middle">Date of Admission </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][4]}" /></td>
                                                </tr>


                                                <tr>
                                                    <td align="left" valign="middle">6.</td>
                                                    <td align="left" valign="middle">Nationality </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][5]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">7.</td>
                                                    <td align="left" valign="middle">Religion </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][6]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">8.</td>
                                                    <td align="left" valign="middle">Caste </td>
                                                    <td align="left" valign="middle"><s:property value="" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">9.</td>
                                                    <td align="left" valign="middle">Mothertongue </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][8]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">10.</td>
                                                    <td align="left" valign="middle">Family Income </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][9]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">11.</td>
                                                    <td align="left" valign="middle">Blood Group </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][7]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">12.</td>
                                                    <td align="left" valign="middle">Hosteler </td>
                                                    <td align="left" valign="middle"> <s:property value="%{studentmasterlist[0][28]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">13.</td>
                                                    <td align="left" valign="middle">Mess Using </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][30]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle">14.</td>
                                                    <td align="left" valign="middle">Transport Using </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][29]}" /></td>
                                                </tr>


                                                <tr>
                                                    <td align="left" valign="middle">12.</td>
                                                    <td align="left" valign="middle">Address </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][14]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle"></td>
                                                    <td align="left" valign="middle"> </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][15]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle"></td>
                                                    <td align="left" valign="middle"> </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][16]}" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" valign="middle"></td>
                                                    <td align="left" valign="middle"> </td>
                                                    <td align="left" valign="middle"><s:property value="%{studentmasterlist[0][17]}" /></td>
                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>
                                    <div id="tab2" class="tab-pane">

                                        <div id="showgrade" class="tab-pane active" hidden="true" >
                                        </div>
                                    </div>
                                    <div id="tab3" class="tab-pane">
                                        <div id="showattdtls" class="tab-pane active" hidden="true" >
                                        </div>
                                    </div>
                                    <div id="tab4" class="tab-pane">Class : <s:property value="%{studentmasterlist[0][22]}" />
                                        <div id="showsubjects" class="tab-pane active" hidden="true" >
                                        </div>
                                    </div>
                                    <div id="tab5" class="tab-pane">
                                        <div id="showfees" class="tab-pane active" hidden="true" >
                                        </div>
                                    </div>
                                    <div id="tab6" class="tab-pane">
                                        <p><strong>English : Write Poem on chapter 1 </strong></p>
                                        <p><strong>Maths : Learn n write counting from 1 to 100 </strong></p>
                                        <p><strong>EVS : Draw n Learn the body parts </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <!-- End: Content -->

                </section>

                <!-- Start: Right Sidebar -->
                <aside id="sidebar_right" class="nano affix">

                    <!-- Start: Sidebar Right Content -->
                    <div class="sidebar-right-content nano-content p15">
                        <h5 class="title-divider text-muted mb20"> Server Statistics
                            <span class="pull-right"> 2013
                                <i class="fa fa-caret-down ml5"></i>
                            </span>
                        </h5>
                        <div class="progress mh5">
                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 44%">
                                <span class="fs11">DB Request</span>
                            </div>
                        </div>
                        <div class="progress mh5">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 84%">
                                <span class="fs11 text-left">Server Load</span>
                            </div>
                        </div>
                        <div class="progress mh5">
                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 61%">
                                <span class="fs11 text-left">Server Connections</span>
                            </div>
                        </div>
                        <h5 class="title-divider text-muted mt30 mb10">Traffic Margins</h5>
                        <div class="row">
                            <div class="col-xs-5">
                                <h3 class="text-primary mn pl5">132</h3>
                            </div>
                            <div class="col-xs-7 text-right">
                                <h3 class="text-success-dark mn">
                                    <i class="fa fa-caret-up"></i> 13.2% </h3>
                            </div>
                        </div>
                        <h5 class="title-divider text-muted mt25 mb10">Database Request</h5>
                        <div class="row">
                            <div class="col-xs-5">
                                <h3 class="text-primary mn pl5">212</h3>
                            </div>
                            <div class="col-xs-7 text-right">
                                <h3 class="text-success-dark mn">
                                    <i class="fa fa-caret-up"></i> 25.6% </h3>
                            </div>
                        </div>
                        <h5 class="title-divider text-muted mt25 mb10">Server Response</h5>
                        <div class="row">
                            <div class="col-xs-5">
                                <h3 class="text-primary mn pl5">82.5</h3>
                            </div>
                            <div class="col-xs-7 text-right">
                                <h3 class="text-danger mn">
                                    <i class="fa fa-caret-down"></i> 17.9% </h3>
                            </div>
                        </div>
                        <h5 class="title-divider text-muted mt40 mb20"> Server Statistics
                            <span class="pull-right text-primary fw600">USA</span>
                        </h5>
                    </div>

                </aside>




            </div>
    </body>
</html>
