<%-- 
    Document   : staffmaster
    Created on : 27 Dec, 2016, 5:07:58 PM
    Author     : Surya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%@ taglib prefix="s" uri="/struts-tags"%>
        <%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
        <script type="text/javascript">
            function submitvalue(id) {
                document.getElementById('process').value = id;
            }

            function isNumber(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    return false;
                }
                return true;
            }


            function ValidateAlpha(evt)
            {

                var keyCode = (evt.which) ? evt.which : evt.keyCode
                if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32 && keyCode != 8)
                {
                    return false;
                }

                return true;
            }

        </script>  

    </head>
    <body> 
        <s:form name="frm" id="frm" theme="simple"  cssClass="xhtml">  
            <div class="col-md-12">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <span class="panel-title">Staff Master</span>
                        <div class="widget-menu pull-right">
                            <code class="mr10 bg-primary dark p3 ph5"></code>
                        </div>

                    </div><s:hidden id="process" name="process"/>
                    <div class="panel-body border">
                        <s:iterator id="disp" value="%{staffdetails}" var="staf" status="st">
                            <div class="panel panel-alert">
                                <div class="panel-body border">
                                    <table width="100%"  border="0" cellpadding="0" cellspacing="0"  class="un_table">
                                        <tr>
                                            <td width="0" height="0">ID </td>
                                            <td width="0" height="0"><s:textfield name="stffid" id="stffid" readonly="true" value="%{#staf[1]}"/></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Title</strong> </td>
                                            <td width="0" height="0"><s:select cssClass="form-control"
                                                      id="title" 
                                                      name="title"
                                                      list="#@java.util.HashMap@{'Mr':'Mr','Mrs':'Mrs'}"
                                                      value="%{#staf[2]}"
                                                      headerKey="-1"
                                                      headerValue="Select"
                                                      />
                                                <div class="type-text"> <span id="vehempnameError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>First Name </strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" id="stfname" name="stfname" value="%{#staf[3]}" onkeypress="return ValidateAlpha(event)"/></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Last Name</strong> </td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" id="stflastnam" name="stflastnam" value="%{#staf[4]}" onkeypress="return ValidateAlpha(event)"/>
                                                <div class="type-text"> <span id="vehempnameError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>DOB</strong> </td>
                                            <td width="0" height="0"><sj:datepicker cssClass="form-control" name="stfdob" id="stfdob"  displayFormat="dd/mm/yy" showOn="focus"  changeYear="true"
                                                           changeMonth="true"   style="width:100px" value="%{#staf[13]}"/>
                                                <div class="type-text"> <span id="vehmanfactError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Sex</strong> </td>
                                            <td width="0" height="0">

                                                <div class="radio-custom radio-danger  mb5"> 
                                                    <s:radio  id="stfsex" name="stfsex" list="#@java.util.HashMap@{'M':'Male','F':'Female'}" value="%{#staf[5]}"/>
                                                </div>
                                                <div class="type-text"> <span id="vehtypeError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Maritial Status</strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <div class="radio-custom radio-danger  mb5"> 
                                                        <s:radio  id="stfmaritialstat" name="stfmaritialstat" list="#@java.util.HashMap@{'S':'Single','M':'Married'}" value="%{#staf[8]}"/>
                                                    </div>
                                                </div>
                                                <%-- <s:select cssClass="form-control"
                                                  id="stfmaritialstat" 
                                                  name="stfmaritialstat"
                                                  list="#@java.util.HashMap@{'S':'Single','M':'Married'}" 

                                                /> --%>
                                                <div class="type-text"> <span id="vehregnoError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Blood Group </strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:select cssClass="form-control"
                                                              id="stfbloodgrp" 
                                                              name="stfbloodgrp"
                                                              list="bloodlist"
                                                              headerKey="-1"
                                                              headerValue="Select"
                                                              value="%{#staf[12]}"
                                                              /><i id="stfbloodgrpError" class="text-danger mn"></i></div>

                                                </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Qualification</strong></td>
                                            <td width="0" height="0"> <div class="col-xs-8"><s:textfield cssClass="form-control" id="stfquali" name="stfquali" value="%{#staf[15]}" onkeypress="return ValidateAlpha(event)"/></div>
                                                </td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Teaching Exp</strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" id="stfexperi" name="stfexperi"  value="%{#staf[36]}" onkeypress="return isNumber(event)"/>
                                                <div class="type-text"> <span id="vehmodelError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td width="0" height="0"><strong>Non Teaching Exp</strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" id="stfnonteachexp" name="stfnonteachexp"  value="%{#staf[36]}" onkeypress="return isNumber(event)"/>
                                                <div class="type-text"> <span id="vehregnoError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Confirm Date</strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" id="stfconfirmdt" name="stfconfirmdt"  value="%{#staf[39]}" readonly="true"/>
                                                <div class="type-text"> <span id="vehmodelError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td width="0" height="0"><strong>Nationality </strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" name="stfnation" id="stfnation"  value="%{#staf[33]}"   onkeypress="return ValidateAlpha(event)"/>
                                                <div class="type-text"> <span id="vehnoError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Religion </strong></td>
                                            <td width="0" height="0">
                                                <s:select cssClass="form-control"
                                                          id="stfrelig" 
                                                          name="stfrelig"
                                                          list="religionlist"
                                                          headerKey="-1"
                                                          headerValue="Select"

                                                          />


                                                <div class="type-text"> <span id="vehchasnoError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Caste </strong></td>
                                            <td width="0" height="0">
                                                <s:select cssClass="form-control"
                                                          id="stfrelig" 
                                                          name="stfrelig"
                                                          list="castelist"
                                                          headerKey="-1"
                                                          headerValue="Select"

                                                          />


                                                <div class="type-text"> <span id="vehengnoError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Caste Name </strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" name="stfcastnam" id="stfcastnam"  onkeypress="return ValidateAlpha(event)"/>
                                                <div class="type-text"> <span id="vehfuelError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Guardian</strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" name="stfguard" id="stfguard"  value="%{#staf[17]}"  onkeypress="return ValidateAlpha(event)"/>
                                                <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Date Of Join </strong></td>
                                            <td width="0" height="0"><sj:datepicker cssClass="form-control" name="stfdoj" id="stfdoj" 
                                                           changeYear="true"  changeMonth="true" displayFormat="dd/mm/yy" showOn="focus"  readonly="true" style="width:100px" value="%{#staf[14]}" />
                                                <div class="type-text"> <span id="vehccError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Staff Type </strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" name="stfstftyp" id="stfstftyp"  value="%{#staf[6]}"  onkeypress="return ValidateAlpha(event)"/>
                                                <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td><strong>Handicap </strong> </td>
                                            <td width="0" height="0">

                                                <div class="radio-custom radio-danger  mb5"> 
                                                    <s:radio  id="stfhadicap" name="stfhadicap" list="#@java.util.HashMap@{'Y':'Yes','N':'No'}" value="%{#staf[64]}"/>
                                                </div>
                                                <%--<s:checkbox name="stfhadicap" id="stfhadicap" label="Handicap" />&nbsp;&nbsp;<strong>Handicap</strong> --%>
                                            </td>
                                            <td width="0" height="0">
                                                <div class="type-text"> <span id="vehccError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Department</strong></td>
                                            <td width="0" height="0">
                                                <s:textfield cssClass="form-control" name="stfdept" id="stfdept"  value="%{#staf[9]}"  onkeypress="return ValidateAlpha(event)"/>
                                                <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Designation</strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" name="stfdesig" id="stfdesig"  value="%{#staf[11]}"  onkeypress="return ValidateAlpha(event)"/>
                                                <div class="type-text"> <span id="vehccError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <%--<tr>
                                            <td width="0" height="0"><strong>Subject Handling </strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" name="stfsubhandl" id="stfsubhandl" onkeypress="return isNumber(event)"/>
                                                <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Classes Handling </strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" name="stfclshandl" id="stfclshandl" onkeypress="return isNumber(event)"/>
                                                <div class="type-text"> <span id="vehccError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
        </tr> --%>
                                        <tr>
                                            <td width="0" height="0"><strong>Tutor </strong></td>

                                            <td width="10%"> <div class="radio-custom radio-danger  mb5"> 
                                                    <s:radio  id="stftut" name="stftut" list="#@java.util.HashMap@{'Y':'Yes','N':'No'}" value="%{#staf[35]}"/>
                                                </div></td>
                                            <td width="0" height="0"><strong> </strong></td>
                                            <td width="0" height="0">
                                            </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div class="panel panel-alert">

                                <div class="panel-body border">
                                    <table width="100%"  border="0" cellpadding="0" cellspacing="0"  class="un_table" >
                                        <tr>
                                            <td width="0" height="0"><strong>House No./Name</strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control"  name="stfhousenam" id="stfhousenam" value="%{#staf[28]}" />
                                                <div class="type-text"> <span id="vehwheelError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Colony / Street / Locality</strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" name="stfhousestreet" id="stfhousestreet" value="%{#staf[29]}" />
                                                <div class="type-text"> <span id="vehcolorError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Town/City</strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control" name="stfhousecity" id="stfhousecity" onkeypress="return isNumber(event)" value="%{#staf[30]}" />
                                                </div>
                                                <div class="type-text"> <span id="vehseatcapacityError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>District</strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control"  name="stfdist" id="stfdist" onkeypress="return isNumber(event)" value="%{#staf[31]}" />
                                                </div>
                                                <div class="type-text"> <span id="vehchqamtError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>State</strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:select cssClass="form-control"
                                                              id="stfstate" 
                                                              name="stfstate"
                                                              list="statelist"
                                                              value="%{#staf[32]}" 
                                                              headerKey="-1"
                                                              headerValue="Select"
                                                              />

                                                </div>
                                                <div class="type-text"> <span id="vehinvnoError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Pincode</strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfpin" id="stfpin" value="%{#staf[34]}" onkeypress="return isNumber(event)" maxLength="6"/>
                                                </div>
                                                <div class="type-text"> <span id="vehpurdtError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Country</strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control" name="stfcountry" id="stfcountry" value="%{#staf[33]}" onkeypress="return ValidateAlpha(event)" />
                                                </div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0">&nbsp;</td>
                                            <td width="0" height="0">

                                                <%-- <s:select cssClass="form-control"
                                                          id="vehregto" 
                                                          name="vehregto"
                                                          list="#@java.util.HashMap@{'COMPANY':'COMPANY'}"

/> --%>
                                                <div class="type-text"> <span id="vehtypeError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="0"><strong>Mobile Number </strong></td>
                                            <td height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control"  name="stfmobile" id="stfmobile" value="%{#staf[18]}" onkeypress="return isNumber(event)"/>
                                                </div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>Email</strong> </td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control" name="stfemail" id="stfemail" value="%{#staf[20]}" maxLength="15"/>
                                                </div>
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td height="0"><strong>Refered By </strong></td>
                                            <td height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control"  name="stfcareof" id="stfcareof" value="%{#staf[44]}" maxLength="20"/>
                                                </div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong></strong> </td>
                                            <td width="0" height="0">
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                    </table>

                                </div>
                            </div>
                            <div class="panel panel-alert">
                                <div class="panel-body border">
                                    <table width="100%"  border="0" cellpadding="0" cellspacing="0"  class="un_table">
                                        <tr>
                                            <td height="0"><strong>Bank Name </strong></td>
                                            <td height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control"  name="stfbankname" id="stfbankname" value="%{#staf[23]}" onkeypress="return ValidateAlpha(event)" />
                                                </div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>Account No</strong> </td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control" name="stfbankacc" id="stfbankacc" value="%{#staf[21]}" onkeypress="return isNumber(event)"/>
                                                </div>
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="0"><strong>IFSC Code</strong></td>
                                            <td height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control"  name="stfifsc" id="stfifsc" value="%{#staf[22]}" maxLength="9"/>
                                                </div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>PAN No</strong> </td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control" name="stfpanno" id="stfpanno" value="%{#staf[26]}" maxLength="10"/>
                                                </div>
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="0"><strong>PF No.</strong></td>
                                            <td height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control"  name="stfpfno" id="stfpfno" value="%{#staf[24]}" maxLength="15"/>
                                                </div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>ESI No</strong> </td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control" name="stfesino" id="stfesino" value="%{#staf[25]}" maxLength="15"/>
                                                </div>
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="0"><strong>Aadhar No.</strong></td>
                                            <td height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control"  name="stfadhar" id="stfadhar" value="%{#staf[47]}" maxLength="12"/>
                                                </div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                            <td>&nbsp;</td>
                                            <td height="0"> <strong>Election ID </strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control"  name="stfelection" id="stfelection" value="%{#staf[45]}" maxLength="10"/>
                                                </div>
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td height="0"><strong>UAN No.</strong></td>
                                            <td height="0">
                                                <div class="col-xs-6">
                                                    <s:textfield cssClass="form-control"  name="stfuanno" id="stfuanno" value="%{#staf[46]}" maxLength="12"/>
                                                </div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                            <td>&nbsp;</td>
                                            <td height="0"> <strong> </strong></td>
                                            <td width="0" height="0">
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td width="0" height="0"><strong>Remarks </strong></td>
                                            <td width="0" height="0">

                                                <div class="col-xs-6"><s:textarea cssClass="form-control" name="stfremarks" id="stfremarks"/></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"></td>
                                            <td width="0" height="0"></td>
                                            <td width="10%"></td>
                                        </tr>
                                        <tr>
                                            <td height="0" colspan="6" align="center" valign="middle"><div style="width: 100px" align="center" id="svresult"> 

                                                    <sj:submit cssClass="btn btn-alert btn-gradient dark btn-block"
                                                               formIds="frm"
                                                               targets="homemain"
                                                               onclick="submitvalue(this.id)"
                                                               name="stfupd"
                                                               id="stfupd"
                                                               align="center"
                                                               button="true"
                                                               value="Update"
                                                               indicator="indicator"

                                                               />
                                                </div></td><strong><font color="red"> <s:property value="echo" /></font></strong>
                                    </table>			  
                                </div>
                            </div>
                        </s:iterator>
                    </div>
                </div>
            </div>
        </s:form>                             
    </body>
</html>
