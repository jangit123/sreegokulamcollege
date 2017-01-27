<!DOCTYPE html>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>


<html>
    <head>
        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <title>Sree Gokulam Arts and Science College</title>    




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
        <link rel="stylesheet" type="text/css" href="vendor/plugins/ladda/ladda.min.css">

        <!-- Social Icon Btns CSS(font) -->
        <link rel="stylesheet" type="text/css" href="assets/fonts/zocial/zocial.css">

        <!-- Theme CSS -->
        <link rel="stylesheet" type="text/css" href="assets/skin/default_skin/css/theme.css">
        <!-- Admin Forms CSS -->
        <link rel="stylesheet" type="text/css" href="assets/admin-tools/admin-forms/css/admin-forms.css">

        <script type="text/javascript">  </script>
            <script type = "text/javascript" src = "${pageContext.request.contextPath}/struts/utils.js" ></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/struts/xhtml/validation.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/js/shortcut.js"></script>
        <s:if test="%{theme == 'showcase' || theme == null}">
            <sj:head debug="true" compressed="false" jquerytheme="showcase" customBasepath="themes" loadFromGoogle="%{google}" ajaxhistory="%{ajaxhistory}" defaultIndicator="myDefaultIndicator" defaultLoadingText="Please wait ..."/>
        </s:if>
        <s:else>
            <sj:head debug="true" compressed="false" jquerytheme="%{theme}" loadFromGoogle="%{google}" ajaxhistory="%{ajaxhistory}" defaultIndicator="myDefaultIndicator" defaultLoadingText="Please wait ..."/>
        </s:else>

        <!-- This file includes necessary functions/topics for validation and all topic examples -->
        <script type="text/javascript" src="js/showcase.js"></script>
        <!-- Extend the Struts2 jQuery Plugin with an richtext editor -->
        <script type="text/javascript" src="js/extendplugin.js"></script>

        <script type="text/javascript" src="js/jquery.tiptip.js"></script>

  
    <sj:head />
</head>

<body class="sb-top sb-top-sm">



    <header class="navbar navbar-fixed-top navbar-shadow">

        <div class="navbar-branding">
            <a class="navbar-brand" href="#">
                <img src="assets/img/logo2.png" width="179" height="39"> </a>
        </div>
        <ul class="nav navbar-nav navbar-left">
            <li>
                <a class="sidebar-menu-toggle hidden" href="#">
                    <span class="ad ad-ruby fs18"></span>
                </a>
            </li>
            <li>
                <a class="topbar-menu-toggle" href="#">
                    <span class="ad ad-wand fs16"></span>
                </a>
            </li>
            <li class="hidden-xs">
                <a class="request-fullscreen toggle-active" href="#">
                    <span class="ad ad-screen-full fs18"></span>
                </a>
            </li>
        </ul>
        <form class="navbar-form navbar-left navbar-search" role="search">
            <div class="form-group">
                News : <marquee width="75%">...!!!! ....Welcome to Online College Portal...</marquee>
            </div>
        </form>

        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown menu-merge">
                <a class="dropdown-toggle" data-toggle="dropdown" href="Logout">
                    <span class="ad ad-radio-tower fs18">Sign out</span>
                </a>
                <ul class="dropdown-menu media-list w350 animated animated-shorter fadeIn" role="menu">
                    <li class="dropdown-header">
                        <span class="dropdown-title"> Notifications</span>
                        <span class="label label-warning">12</span>
                    </li>
                    <li class="media">
                        <a class="media-left" href="#"> <img src="assets/img/avatars/5.jpg" class="mw40" alt="avatar"> </a>
                        <div class="media-body">
                            <h5 class="media-heading">Article
                                <small class="text-muted">- 08/16/22</small>
                            </h5> Last Updated 36 days ago by
                            <a class="text-system" href="#"> Max </a>
                        </div>
                    </li>
                    <li class="media">
                        <a class="media-left" href="#"> <img src="assets/img/avatars/2.jpg" class="mw40" alt="avatar"> </a>
                        <div class="media-body">
                            <h5 class="media-heading mv5">Article
                                <small> - 08/16/22</small>
                            </h5>
                            Last Updated 36 days ago by
                            <a class="text-system" href="#"> Max </a>
                        </div>
                    </li>
                    <li class="media">
                        <a class="media-left" href="#"> <img src="assets/img/avatars/3.jpg" class="mw40" alt="avatar"> </a>
                        <div class="media-body">
                            <h5 class="media-heading">Article
                                <small class="text-muted">- 08/16/22</small>
                            </h5> Last Updated 36 days ago by
                            <a class="text-system" href="#"> Max </a>
                        </div>
                    </li>
                    <li class="media">
                        <a class="media-left" href="#"> <img src="assets/img/avatars/4.jpg" class="mw40" alt="avatar"> </a>
                        <div class="media-body">
                            <h5 class="media-heading mv5">Article
                                <small class="text-muted">- 08/16/22</small>
                            </h5> Last Updated 36 days ago by
                            <a class="text-system" href="#"> Max </a>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="dropdown menu-merge">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">

                </a>

            </li>
            <li class="menu-divider hidden-xs">
                <i class="fa fa-circle"></i>
            </li>
            <li class="dropdown menu-merge">
                <a href="#" class="dropdown-toggle fw600 p15" data-toggle="dropdown"> <img src="#"  alt="" class="mw30 br64 mr15">Login By !! <s:property value="#session.user" />
                </a>
                <ul class="dropdown-menu list-group dropdown-persist w250" role="menu">
                    <li class="dropdown-header clearfix">
                        <div class="pull-left ml10">
                            <select id="user-status">
                                <optgroup label="Current Status:">
                                    <option value="1-1">Away</option>
                                    <option value="1-2">Offline</option>
                                    <option value="1-3" selected="selected">Online</option>
                                </optgroup>
                            </select>
                        </div>

                        <div class="pull-right mr10">
                            <select id="user-role">
                                <optgroup label="Logged in As:">
                                    <option value="1-1">Client</option>
                                    <option value="1-2">Editor</option>
                                    <option value="1-3" selected="selected">Admin</option>
                                </optgroup>
                            </select>
                        </div>

                    </li>
                    <li class="list-group-item">
                        <a href="#" class="animated animated-short fadeInUp">
                            <span class="fa fa-envelope"></span> Messages
                            <span class="label label-warning">2</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#" class="animated animated-short fadeInUp">
                            <span class="fa fa-user"></span> Friends
                            <span class="label label-warning">6</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#" class="animated animated-short fadeInUp">
                            <span class="fa fa-gear"></span> Account Settings </a>
                    </li>
                    <li class="list-group-item">
                        <a href="Logout" class="animated animated-short fadeInUp">
                            <span class="fa fa-power-off"></span> Logout </a>
                    </li>
                </ul>
            </li>
            <li id="toggle_sidemenu_t">  
                <span class="fa fa-caret-up"></span>
            </li>
        </ul>

    </header>
    <!-- End: Header -->

    <!-- Start: Sidebar -->
    <aside id="sidebar_left" class="">

        <!-- Start: Sidebar Left Content -->
        <div class="sidebar-left-content nano-content">

            <!-- Start: Sidebar Menu -->
            <ul class="nav sidebar-menu">

                <li>
                    <a  href="#">
                        <s:iterator value="menumap" var="menu">
                            <span ><s:property value="#menu[1]" /></span>
                        </s:iterator>
                    </a>
                    <ul class="nav sub-nav">
                        <s:iterator value="submenumap" status="stat" var="submenu">
                            <s:if test="%{#menu[0]==#submenu[0]}">
                                <li><s:url id="submenuid" action="%{#submenu[2]}"/>
                                    <sj:a href="%{submenuid}" targets="homemain2s">
                                        <s:property value="#submenu[1]" /> </sj:a>
                                    </li>
                            </s:if>
                        </s:iterator>

                    </ul>
                </li>







            </ul>
            <!-- End: Sidebar Menu -->

        </div>


        <!-- End: Sidebar Left Content -->

    </aside>
    <!-- Start: Content-Wrapper -->
    <section id="content_wrapper">

        <!-- Start: Topbar-Dropdown -->
        <div id="topbar-dropmenu">
            <div class="topbar-menu row">
                <div class="col-xs-4 col-sm-2">
                    <a href="#" class="metro-tile">
                        <span class="metro-icon glyphicon glyphicon-inbox"></span>
                        <p class="metro-title">Messages</p>
                    </a>
                </div>
                <div class="col-xs-4 col-sm-2">
                    <a href="#" class="metro-tile">
                        <span class="metro-icon glyphicon glyphicon-user"></span>
                        <p class="metro-title">Users</p>
                    </a>
                </div>
                <div class="col-xs-4 col-sm-2">
                    <a href="#" class="metro-tile">
                        <span class="metro-icon glyphicon glyphicon-headphones"></span>
                        <p class="metro-title">Support</p>
                    </a>
                </div>
                <div class="col-xs-4 col-sm-2">
                    <a href="#" class="metro-tile">
                        <span class="metro-icon fa fa-gears"></span>
                        <p class="metro-title">Settings</p>
                    </a>
                </div>
                <div class="col-xs-4 col-sm-2">
                    <a href="#" class="metro-tile">
                        <span class="metro-icon glyphicon glyphicon-facetime-video"></span>
                        <p class="metro-title">Videos</p>
                    </a>
                </div>
                <div class="col-xs-4 col-sm-2">
                    <a href="#" class="metro-tile">
                        <span class="metro-icon glyphicon glyphicon-picture"></span>
                        <p class="metro-title">Pictures</p>
                    </a>
                </div>
            </div>
        </div>
        <!-- End: Topbar-Dropdown -->

        <!-- Start: Topbar -->
        <header id="topbar" class="hidden">
            <div class="topbar-left">
                <ol class="breadcrumb">
                    <li class="crumb-active">
                        <a href="dashboard.html">Dashboard</a>
                    </li>
                    <li class="crumb-icon">
                        <a href="dashboard.html">
                            <span class="glyphicon glyphicon-home"></span>
                        </a>
                    </li>
                    <li class="crumb-link">
                        <a href="dashboard.html">Home</a>
                    </li>
                    <li class="crumb-trail">Dashboard</li>
                </ol>
            </div>
            <div class="topbar-right">
                <div class="ib topbar-dropdown">
                    <label for="topbar-multiple" class="control-label pr10 fs11 text-muted">Reporting Period</label>
                    <select id="topbar-multiple" class="hidden">
                        <optgroup label="Filter By:">
                            <option value="1-1">Last 30 Days</option>
                            <option value="1-2" selected="selected">Last 60 Days</option>
                            <option value="1-3">Last Year</option>
                        </optgroup>
                    </select>
                </div>
                <div class="ml15 ib va-m" id="toggle_sidemenu_r">
                    <a href="#" class="pl5">
                        <i class="fa fa-sign-in fs22 text-primary"></i>
                        <span class="badge badge-hero badge-danger">3</span>
                    </a>
                </div>
            </div>
        </header>


        <!-- End: Topbar -->

        <!-- Begin: Content -->
        <section id="content" class="animated fadeIn">

            <div id="homemain2s"></div>



        </section>
        <!-- End: Content -->

    </section>

</div>


<!-- End: Main -->

<!-- BEGIN: PAGE SCRIPTS -->

<!-- jQuery -->
<!--    <script src="vendor/jquery/jquery-1.11.1.min.js"></script>
    <script src="vendor/jquery/jquery_ui/jquery-ui.min.js"></script>
          <script src="vendor/plugins/sparkline/jquery.sparkline.min.js"></script>-->


<!-- Theme Javascript -->
<script src="assets/js/utility/utility.js"></script>
<script src="assets/js/demo/demo.js"></script>
<script src="assets/js/main.js"></script>
<script type="text/javascript">
            jQuery(document).ready(function() {

                "use strict";

                // Init Theme Core    
                Core.init();


            });
</script>
<!-- END: PAGE SCRIPTS -->

</body>



</html>
