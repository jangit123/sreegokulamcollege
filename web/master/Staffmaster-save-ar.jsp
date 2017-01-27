<%-- 
    Document   : staffmaster
    Created on : 27 Dec, 2016, 5:07:58 PM
    Author     : Surya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>

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
                if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32 && keyCode != 8 && keyCode != 9)
                    return false;
                return true;
            }
        </script>  

    </head>
    <body> 
        <s:form name="frm" id="frm" action="staffactionsave" method="post" theme="simple"  cssClass="xhtml">  
            <div class="col-md-12">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <span class="panel-title">Staff Master</span>
                        <div class="widget-menu pull-right">
                            <code class="mr10 bg-primary dark p3 ph5"></code>
                        </div>

                    </div><s:hidden id="process" name="process"/>
                    <div class="panel-body border">
                        <div class="panel panel-alert">
                            <div class="panel-body border">
                                <table width="100%"  border="0" cellpadding="0" cellspacing="0"   class="un_table" >

                                    <tr>
                                        <td width="0" height="0">ID </td>
                                        <td width="0" height="0"><s:textfield name="" id="" readonly="true" placeholder="Auto ID"/></td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Title  <i class="text-danger mn"> *</i>   </strong> </td>
                                        <td width="0" height="0"><div class="col-xs-6">
                                                <s:select cssClass="form-control"
                                                          id="title" 
                                                          name="title"
                                                          list="#@java.util.HashMap@{'Mr':'Mr','Mrs':'Mrs'}"
                                                          headerKey="-1"
                                                          headerValue="Select"
                                                          /></div><i id="titleError" class="text-danger mn"></i>
                                           </td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>First Name <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><s:textfield cssClass="form-control" id="stfname" name="stfname" onkeypress="return ValidateAlpha(event)"/>
                                            <i id="stfnameError" class="text-danger mn"></i></td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Last Name</strong> </td>
                                        <td width="0" height="0"><s:textfield cssClass="form-control" id="stflastnam" name="stflastnam" onkeypress="return ValidateAlpha(event)"/>
                                            </td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>DOB <i class="text-danger mn"> *</i></strong> </td>
                                        <td width="0" height="0"><div class="col-xs-6"><sj:datepicker cssClass="form-control" name="stfdob" id="stfdob"  displayFormat="dd/mm/yy" showOn="focus"  changeYear="true"
                                                       changeMonth="true"   style="width:100px"/><i id="stfdobError" class="text-danger mn"></i></div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Sex <i class="text-danger mn"> *</i></strong> </td>
                                        <td width="0" height="0">
                                            <div class="radio-custom radio-danger  mb5"> 
                                                <s:radio  id="stfsex" name="stfsex" list="#@java.util.HashMap@{'M':'Male','F':'Female'}" value="'F'"/>
                                            </div>
                                            <div class="type-text"> <span id="vehtypeError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>Maritial Status <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0">
                                            <div class="radio-custom radio-danger  mb5"> 
                                                <s:radio  id="stfmaritialstat" name="stfmaritialstat" list="#@java.util.HashMap@{'Y':'Married','N':'Single'}" value="'N'"/>
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
                                                          /><i id="stfbloodgrpError" class="text-danger mn"></i></div>


                                            <div class="type-text"> <span id="vehmodelError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>Qualification <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"> <div class="col-xs-6"><s:textfield cssClass="form-control" id="stfquali" name="stfquali"  onkeypress="return ValidateAlpha(event)"/>
                                                <i id="stfqualiError" class="text-danger mn"></i></div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Teaching Exp <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" id="stfexperi" name="stfexperi"   />
                                                <i id="stfexperiError" class="text-danger mn"></i></div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td width="0" height="0"><strong>Non Teaching Exp <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" id="stfnonteachexp" name="stfnonteachexp"  />
                                                <i id="stfnonteachexpError" class="text-danger mn"></i></div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Confirm Date <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6">
                                                <sj:datepicker cssClass="form-control" name="stfconfirmdt" id="stfconfirmdt"  displayFormat="dd/mm/yy" showOn="focus"  changeYear="true"
                                                               changeMonth="true"   style="width:100px" /><i id="stfconfirmdtError" class="text-danger mn"></i>
                                            </div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td width="0" height="0"><strong>Nationality <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfnation" id="stfnation" value="INDIAN" onkeypress="return ValidateAlpha(event)"/>
                                                <i id="stfnationError" class="text-danger mn"></i></div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Religion <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0">
                                            <div class="col-xs-6">
                                                <s:select cssClass="form-control"
                                                          id="stfrelig" 
                                                          name="stfrelig"
                                                          list="religionlist"
                                                          headerKey="-1"
                                                          headerValue="Select"
                                                          /><i id="stfreligError" class="text-danger mn"></i></div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>Caste <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6">
                                                <s:select cssClass="form-control"
                                                          id="stfcaste" 
                                                          name="stfcaste"
                                                          list="castelist"
                                                          headerKey="-1"
                                                          headerValue="Select"
                                                          /><i id="stfcasteError" class="text-danger mn"></i></div>


                                            <div class="type-text"> <span id="vehengnoError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Caste Name <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfcastnam" id="stfcastnam" onkeypress="return ValidateAlpha(event)"/>
                                                <i id="stfcastnamError" class="text-danger mn"></i></div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>Guardian</strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfguard" id="stfguard" onkeypress="return ValidateAlpha(event)"/></div>
                                            <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Date Of Join <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><sj:datepicker cssClass="form-control" name="stfdoj" id="stfdoj" 
                                                       changeYear="true"  changeMonth="true" displayFormat="dd/mm/yy" showOn="focus"   style="width:100px" />
                                                <i id="stfdojError" class="text-danger mn"></i></div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>Staff Type <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfstftyp" id="stfstftyp" oonkeypress="return ValidateAlpha(event)"/>
                                                <i id="stfstftypError" class="text-danger mn"></i></div>
                                            <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                        <td><strong>Handicap </strong> </td>
                                        <td width="0" height="0">

                                            <div class="radio-custom radio-danger  mb5"> 
                                                <s:radio  id="stfhadicap" name="stfhadicap" list="#@java.util.HashMap@{'Y':'Yes','N':'No'}" value="'N'"/>
                                            </div>
                                            <%--<s:checkbox name="stfhadicap" id="stfhadicap" label="Handicap" />&nbsp;&nbsp;<strong>Handicap</strong> --%>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>Department <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfdept" id="stfdept" /> <i id="stfdeptError" class="text-danger mn"></i></div>
                                            <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Designation <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfdesig" id="stfdesig" /> <i id="stfdesigError" class="text-danger mn"></i></div>
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
                                        <td width="0" height="0">

                                            <div class="radio-custom radio-danger  mb5"> 
                                                <s:radio  id="stftut" name="stftut" list="#@java.util.HashMap@{'Y':'Yes','N':'No'}" value="'Y'"/>
                                            </div>

                                        </td>
                                        <td width="10%">&nbsp;</td>
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
                                        <td width="0" height="0"><strong>House No./Name <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><s:textfield cssClass="form-control"  name="stfhousenam" id="stfhousenam" /><i id="stfhousenamError" class="text-danger mn"></i>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Colony / Street / Locality <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><s:textfield cssClass="form-control" name="stfhousestreet" id="stfhousestreet"/>
                                            <i id="stfhousestreetError" class="text-danger mn"></i></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>Town/City <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfhousecity" id="stfhousecity" onkeypress="return isNumber(event)"/></div>
                                            <i id="stfhousecityError" class="text-danger mn"></i></td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>District <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfdist" id="stfdist" onkeypress="return isNumber(event)"/></div>
                                            <i id="stfdistError" class="text-danger mn"></i></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>State <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0">
                                            <div class="col-xs-6"><s:select cssClass="form-control"
                                                      id="stfstate" 
                                                      name="stfstate"
                                                      list="castelist"
                                                      headerKey="-1"
                                                      headerValue="Select"
                                                      /><i id="stfstateError" class="text-danger mn"></i></div>
                                        </td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"><strong>Pincode <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfpin" id="stfpin" onkeypress="return isNumber(event)" maxLength="6"/></div>
                                            <i id="stfpinError" class="text-danger mn"></i></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="0" height="0"><strong>Country <i class="text-danger mn"> *</i></strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfcountry" id="stfcountry"/> <i id="stfcountryError" class="text-danger mn"></i></div></td>
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
                                        <td height="0"><strong>Mobile Number <i class="text-danger mn"> *</i></strong></td>
                                        <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfmobile" id="stfmobile" onkeypress="return isNumber(event)" maxLength="10"/></div>
                                            <i id="stfmobileError" class="text-danger mn"></i></td>
                                        <td>&nbsp;</td>
                                        <td height="0"><strong>Email</strong> </td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfemail" id="stfemail"/></div>
                                            <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td height="0"><strong>Refered By </strong></td>
                                        <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfcareof" id="stfcareof" /></div>
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
                                        <td height="0"><strong>Bank Name <i class="text-danger mn"> *</i></strong></td>
                                        <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfbankname" id="stfbankname" onkeypress="return ValidateAlpha(event)"/> </div>
                                            <i id="stfbanknameError" class="text-danger mn"></i></td>
                                        <td>&nbsp;</td>
                                        <td height="0"><strong>Account No <i class="text-danger mn"> *</i></strong> </td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfbankacc" id="stfbankacc" onkeypress="return isNumber(event)"/></div>
                                            <i id="stfbankaccError" class="text-danger mn"></i></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td height="0"><strong>IFSC Code</strong></td>
                                        <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfifsc" id="stfifsc" /></div>
                                            <i id="stfifscError" class="text-danger mn"></i></td>
                                        <td>&nbsp;</td>
                                        <td height="0"><strong>PAN No <i class="text-danger mn"> *</i></strong> </td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfpanno" id="stfpanno"/></div>
                                            <i id="stfpannoError" class="text-danger mn"></i></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td height="0"><strong>PF No.</strong></td>
                                        <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfpfno" id="stfpfno" /></div>
                                            <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                        <td>&nbsp;</td>
                                        <td height="0"><strong>ESI No</strong> </td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfesino" id="stfesino"/></div>
                                            <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td height="0"><strong>Aadhar No. <i class="text-danger mn"> *</i></strong></td>
                                        <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfadhar" id="stfadhar" /></div>
                                            <i id="stfadharError" class="text-danger mn"></i></td>
                                        <td>&nbsp;</td>
                                        <td height="0"> <strong>Election ID </strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfelection" id="stfelection" /></div>
                                            <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td height="0"><strong>UAN No.</strong></td>
                                        <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfuanno" id="stfuanno" /></div>
                                            <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                        <td>&nbsp;</td>
                                        <td height="0"> <strong> </strong></td>
                                        <td width="0" height="0">
                                            <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                        <td width="10%">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td width="0" height="0"><strong>Remarks </strong></td>
                                        <td width="0" height="0"><div class="col-xs-6"><s:textarea cssClass="form-control" name="stfremarks" id="stfremarks"/></div></td>
                                        <td width="10%">&nbsp;</td>
                                        <td width="0" height="0"></td>
                                        <td width="0" height="0"></td>
                                        <td width="10%"></td>
                                    </tr>
                                    <tr>
                                        <td height="0" colspan="6" align="center" valign="middle"><div style="width: 100px" align="center" id="svresult"> 

                                                <sj:submit cssClass="btn btn-danger btn-gradient dark btn-block"
                                                           formIds="frm"
                                                           targets="homemain2s"
                                                           onclick="submitvalue(this.id)"
                                                           name="stfsave"
                                                           id="stfsave"
                                                           align="center"
                                                           button="true"
                                                           value="Save"
                                                           validate="true"
                                                           validateFunction="customeValidation"
                                                           indicator="indicator"

                                                           />
                                            </div></td><strong><font color="red"> <s:property value="echo" /></font></strong>
                                </table>			  
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </s:form>                             
    </body>
</html>
