<!DOCTYPE html>
<!--[if lt IE 7]> <html class="lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]> <html class="lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]> <html class="lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Logout.....</title>


        <style>



            /*
             * Copyright (c) 2013 Thibaut Courouble
             * http://www.cssflow.com
             *
             * Licensed under the MIT License:
             * http://www.opensource.org/licenses/mit-license.php
             */



            .plan {
                float: left;
                width: 150px;
                margin: 20px 2px;
                padding: 15px 25px;
                text-align: center;
                background: white;
                background-clip: padding-box;
                border: 2px solid #e5ded6;
                border-color: rgba(0, 0, 0, 0.1);
                border-radius: 5px;
            }

            .plan-title {
                margin-bottom: 12px;
                font-size: 24px;
                color: #36bce6;
            }

            .plan-price {
                margin-bottom: 20px;
                line-height: 1;
                font-size: 28px;
                font-weight: bold;
                color: #fd935a;
            }

            .plan-unit {
                display: block;
                margin-top: 5px;
                font-size: 13px;
                font-weight: normal;
                color: #aaa;
            }

            .plan-features {
                width: 120px;
                margin: 20px auto 15px;
                padding: 15px 0 0 15px;
                border-top: 1px solid #e5ded6;
                text-align: left;
            }

            .plan-feature {
                line-height: 20px;
                font-size: 24px;
                font-weight: 500;
                color: #333;
            }
            .plan-feature + .plan-feature {
                margin-top: 5px;
            }

            .plan-feature-unit {
                margin-left: 2px;
                font-size: 16px;
            }

            .plan-feature-name {
                font-size: 13px;
                font-weight: normal;
                color: #aaa;
            }

            .plan-button {
                position: relative;
                display: block;
                line-height: 40px;
                font-size: 16px;
                font-weight: 500;
                color: white;
                text-align: center;
                text-decoration: none;
                text-shadow: 0 1px rgba(0, 0, 0, 0.1);
                background: #FF3300;
                border-bottom: 2px solid #cf7e3b;
                border-color: rgba(0, 0, 0, 0.15);
                width:200px;
                border-radius: 4px;
            }
            .plan-button:active {
                top: 2px;
                margin-bottom: 2px;
                border-bottom: 0;
            }

            .plan-highlight {
                margin-top: 0;
                margin-bottom: 0;
                padding-left: 15px;
                padding-right: 15px;
                width: 400px;
                border: 4px solid #37bbe6;
            }
            .plan-highlight .plan-button {
                font-size: 18px;
                line-height: 49px;
                background: #37bce5;
                border-color: #3996b3;
                border-color: rgba(0, 0, 0, 0.15);
            }

            .plan-recommended {
                width: 160px;
                margin: -15px auto 15px;
                padding-bottom: 2px;
                line-height: 22px;
                font-size: 14px;
                font-weight: bold;
                color: white;
                text-shadow: 0 1px rgba(0, 0, 0, 0.05);
                background: #37bbe6;
                border-radius: 0 0 4px 4px;
            }

        </style>
        <!--[if lt IE 9]><script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    </head>
    <body>


        <div class="plan plan-highlight">
            <p class="plan-recommended">Sorry ...</p>
            <p class="plan-price">Session Expired </p>

            <div align="center">  <a href="Logout" class="plan-button">Login again ..!!!</a></div>
        </div>
    </body>
</html>
