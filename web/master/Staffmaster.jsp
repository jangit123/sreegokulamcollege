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
            function callpermaddress()
            {

                if (document.getElementById('chkpermaddr').checked == true)
                {
                    document.getElementById('permstfhousenam').value = document.getElementById('stfhousenam').value;
                    document.getElementById('permstfhousestreet').value = document.getElementById('stfhousestreet').value;
                    document.getElementById('permstfhousecity').value = document.getElementById('stfhousecity').value;
                    document.getElementById('permstfdist').value = document.getElementById('stfdist').value;
                    document.getElementById('permstfstate').value = document.getElementById('stfstate').value;
                    document.getElementById('permstfpin').value = document.getElementById('stfpin').value;
                    document.getElementById('permstfcountry').value = document.getElementById('stfcountry').value;
                    document.getElementById('permstfmobile').value = document.getElementById('stfmobile').value;
                    document.getElementById('permstfemail').value = document.getElementById('stfemail').value;


                }
                if (document.getElementById('chkpermaddr').checked == false)
                {
                    document.getElementById('permstfhousenam').value = "";
                    document.getElementById('permstfhousestreet').value = "";
                    document.getElementById('permstfhousecity').value = "";
                    document.getElementById('permstfdist').value = "";
                    //document.getElementById('permstfstate').value = "";
                    document.getElementById('permstfpin').value = "";
                    document.getElementById('permstfcountry').value = "";
                    document.getElementById('permstfmobile').value = "";
                    document.getElementById('permstfemail').value = "";
                }
            }
            function readURL(input) {
                
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                        $('#stfphotoimg')
                                .attr('src', e.target.result)
                                .width(150)
                                .height(200);
                    };

                    reader.readAsDataURL(input.files[0]);
                }
            }
        </script>  

    </head>
    <body> 
        <s:form name="frm1" id="frm1" action="staffactionsave" method="post" theme="simple"  cssClass="xhtml" enctype="multipart/form-data">  
            <div class="col-md-12">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <span class="panel-title">Staff Master</span>
                        <div class="widget-menu pull-right">


                            <s:url  var="backtolist" action="staffactionsave" escapeAmp="false">
                                <s:param name="process">listback</s:param>

                            </s:url>



                            <sj:submit
                                cssClass="btn active btn-warning"
                                href="%{backtolist}"
                                targets="contentdiv" 

                                name="backtomain"
                                id="backtomain"

                                value="Back"
                                indicator="indicator"
                                /> 




                        </div>

                    </div>
                    <div class="panel-body border">
                        <%--  <s:iterator id="disp" value="staffdetails" var="staf" status="st"> --%>


                        <div class="col-md-12">     

                            <div class="panel panel-alert">
                                <div class="panel-body border">


                                    <table width="100%"  border="0" cellpadding="0" cellspacing="0"   class="un_table" >

                                        <tr>
                                            <th height="0"> <b class="text-primary mn size-1">Personal info</b> </th>
                                            <td height="0">&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td height="0">&nbsp;</td>
                                            <td height="0">&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0">ID </td>
                                            <td width="0" height="0"><s:textfield name="stffid" id="stffid" readonly="true" placeholder="Auto ID" value="%{staffdetails[0][1]}"  /></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Title  <i class="text-danger mn"> *</i>   </strong> </td>
                                            <td width="0" height="0"><div class="col-xs-6">
                                                    <s:select cssClass="form-control"
                                                              id="title" 
                                                              name="title"
                                                              list="#@java.util.HashMap@{'Mr':'Mr','Mrs':'Mrs'}"
                                                              headerKey="-1"
                                                              headerValue="Select"
                                                              value="%{staffdetails[0][2]}"
                                                              /></div><i id="titleError" class="text-danger mn"></i>                                           </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>First Name <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" id="stfname" name="stfname" onkeypress="return ValidateAlpha(event)" value="%{staffdetails[0][3]}" />
                                                <i id="stfnameError" class="text-danger mn"></i></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Last Name</strong> </td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control" id="stflastnam" name="stflastnam" onkeypress="return ValidateAlpha(event)" value="%{staffdetails[0][4]}"/>                                            </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>DOB <i class="text-danger mn"> *</i></strong> </td>
                                            <td width="0" height="0"><div class="col-xs-6"><sj:datepicker cssClass="form-control" name="stfdob" id="stfdob"  displayFormat="dd/mm/yy" showOn="focus"  changeYear="true"
                                                           changeMonth="true"   style="width:100px" value="%{staffdetails[0][13]}"/><i id="stfdobError" class="text-danger mn"></i></div>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Sex <i class="text-danger mn"> *</i></strong> </td>
                                            <td width="0" height="0">
                                                <div class="radio-custom radio-danger  mb5"> 
                                                    <s:radio  id="stfsex" name="stfsex" list="#@java.util.HashMap@{'M':'Male','F':'Female'}"  value="%{staffdetails[0][5]}"/>
                                                </div>
                                                <div class="type-text"> <span id="vehtypeError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Maritial Status <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0">
                                                <div class="radio-custom radio-danger  mb5"> 
                                                    <s:radio  id="stfmaritialstat" name="stfmaritialstat" list="#@java.util.HashMap@{'M':'Married','S':'Single'}" value="%{staffdetails[0][8]}"/>
                                                </div>

                                                <%-- <s:select cssClass="form-control"
                                                  id="stfmaritialstat" 
                                                  name="stfmaritialstat"
                                                  list="#@java.util.HashMap@{'S':'Single','M':'Married'}"

                                    /> --%>
                                                <div class="type-text"> <span id="vehregnoError"></span></div>    </td>
                                            <td width="10%"><div style="height:50px; width:35px; position:absolute;">
                                                    <div style="position:absolute; left: -116px; top:28px;">

                                                        <s:file id="stfphoto" name="stfphoto"  onchange="readURL(this);" />
                                                        <img id="stfphotoimg"  alt="your image"  src="%{staffphoto}.jpg"/>
                                                        <s:property value="{staffdetails[0][48]}"/><br>
                                                    </div>
                                                </div></td>
                                            <td width="0" height="0"><strong>Blood Group </strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6">
                                                    <s:select cssClass="form-control"
                                                              id="stfbloodgrp" 
                                                              name="stfbloodgrp"
                                                              list="bloodlist"
                                                              headerKey="-1"
                                                              headerValue="Select"
                                                              value="%{staffdetails[0][12]}"
                                                              /><i id="stfbloodgrpError" class="text-danger mn"></i></div>


                                                <div class="type-text"> <span id="vehmodelError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Qualification <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"> <div class="col-xs-6">
                                                    <s:url action="autocomp"  var="combload"/>
                                                    <sj:autocompleter cssClass="form-control"
                                                                      href="%{combload}" 
                                                                      id="stfquali" 
                                                                      name="stfquali"
                                                                      list="qualilist"
                                                                      headerKey="-1"
                                                                      headerValue="Select"
                                                                      value="%{staffdetails[0][15]}"
                                                                      />


                                                    <%--  <s:textfield cssClass="form-control" id="stfquali" name="stfquali"  onkeypress="return ValidateAlpha(event)" value="%{staffdetails[0][15]}"/> --%>
                                                    <i id="stfqualiError" class="text-danger mn"></i></div>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Teaching Exp <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" id="stfexperi" name="stfexperi"  value="%{staffdetails[0][36]}"  />
                                                    <i id="stfexperiError" class="text-danger mn"></i></div>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td width="0" height="0"><strong>Non Teaching Exp </strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" id="stfnonteachexp" name="stfnonteachexp" value="%{staffdetails[0][36]}" />
                                                    <i id="stfnonteachexpError" class="text-danger mn"></i></div>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Confirm Date <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6">
                                                    <sj:datepicker cssClass="form-control" name="stfconfirmdt" id="stfconfirmdt"  displayFormat="dd/mm/yy" showOn="focus"  changeYear="true"
                                                                   changeMonth="true"   style="width:100px"  value="%{staffdetails[0][39]}"/><i id="stfconfirmdtError" class="text-danger mn"></i>
                                                </div>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td width="0" height="0"><strong>Nationality <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfnation" id="stfnation"  value="%{staffdetails[0][33]}" onkeypress="return ValidateAlpha(event)"/>
                                                    <i id="stfnationError" class="text-danger mn"></i></div>                                        </td>
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
                                                              /><i id="stfreligError" class="text-danger mn"></i></div>                                        </td>
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
                                                              value="%{staffdetails[0][61]}"
                                                              /><i id="stfcasteError" class="text-danger mn"></i></div>


                                                <div class="type-text"> <span id="vehengnoError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Caste Name <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfcastnam" id="stfcastnam" onkeypress="return ValidateAlpha(event)" value="%{staffdetails[0][62]}"/>
                                                    <i id="stfcastnamError" class="text-danger mn"></i></div>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Guardian</strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfguard" id="stfguard" onkeypress="return ValidateAlpha(event)" value="%{staffdetails[0][17]}"/></div>
                                                <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Date Of Join <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><sj:datepicker cssClass="form-control" name="stfdoj" id="stfdoj" 
                                                           changeYear="true"  changeMonth="true" displayFormat="dd/mm/yy" showOn="focus"   style="width:100px"  value="%{staffdetails[0][14]}" />
                                                    <i id="stfdojError" class="text-danger mn"></i></div>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Staff Type <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6">

                                                    <s:select cssClass="form-control"
                                                              id="stfstftyp" 
                                                              name="stfstftyp"
                                                              list="stypelist"
                                                              headerKey="-1"
                                                              headerValue="Select"
                                                              value="%{staffdetails[0][6]}"
                                                              />

                                                    <%--    <s:textfield cssClass="form-control" name="stfstftyp" id="stfstftyp" oonkeypress="return ValidateAlpha(event)" value="%{staffdetails[0][6]}" /> --%>
                                                    <i id="stfstftypError" class="text-danger mn"></i></div>
                                                <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td><strong>Handicap </strong> </td>
                                            <td width="0" height="0">

                                                <div class="radio-custom radio-danger  mb5"> 
                                                    <s:radio  id="stfhadicap" name="stfhadicap" list="#@java.util.HashMap@{'Y':'Yes','N':'No'}"  value="%{staffdetails[0][64]}"/>
                                                </div>
                                                <%--<s:checkbox name="stfhadicap" id="stfhadicap" label="Handicap" />&nbsp;&nbsp;<strong>Handicap</strong> --%>                                        </td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Department <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6">


                                                    <s:select cssClass="form-control"
                                                              id="stfdept" 
                                                              name="stfdept"
                                                              list="deplist"
                                                              headerKey="-1"
                                                              headerValue="Select"
                                                              value="%{staffdetails[0][9]}"
                                                              />

                                                    <%-- <s:textfield cssClass="form-control" name="stfdept" id="stfdept" value="%{staffdetails[0][9]}"/> --%>


                                                    <i id="stfdeptError" class="text-danger mn"></i></div>
                                                <div class="type-text"> <span id="vehbhpError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td width="0" height="0"><strong>Designation <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6">
                                                    <s:select cssClass="form-control"
                                                              id="stfdesig" 
                                                              name="stfdesig"
                                                              list="desiglist"
                                                              headerKey="-1"
                                                              headerValue="Select"
                                                              value="%{staffdetails[0][11]}"
                                                              />


                                                    <%--   <s:textfield cssClass="form-control" name="stfdesig" id="stfdesig" value="%{staffdetails[0][11]}"/>--%>
                                                    <i id="stfdesigError" class="text-danger mn"></i></div>
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
                                                    <s:radio  id="stftut" name="stftut" list="#@java.util.HashMap@{'Y':'Yes','N':'No'}" value="%{staffdetails[0][35]}"/>

                                                </div> <strong>HOD </strong><s:checkbox id="stfhod" name="stfhod"/>   </td>
                                            <td width="10%">&nbsp;</td>
                                            <td height="0"><strong>Refered By </strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfcareof" id="stfcareof"  value="%{staffdetails[0][44]}"/></div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>

                                        </tr>
                                        <tr>
                                            <td><strong>Mode Of Appointment </strong></td>
                                            <td><div class="col-xs-6">
                                                    <s:select cssClass="form-control"
                                                              id="stfmodeofapp" 
                                                              name="stfmodeofapp"
                                                              list="#@java.util.HashMap@{'1':'Permanent','2':'Temporary','3':'Honorary'}"
                                                              headerKey="-1"
                                                              headerValue="Select"
                                                              value="%{staffdetails[0][6]}"
                                                              /></div></td>
                                            <td></td>

                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>






                        <div class="col-md-6">
                            <div class="panel panel-alert">
                                <div class="panel-body border">


                                    <table width="100%"  border="0" cellpadding="0" cellspacing="0"  class="un_table" >
                                        <tr>

                                            <th>&nbsp;</th>
                                            <th height="0"><b class="text-primary mn size-1">Current Address </b></th>
                                            <td height="0">&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0">&nbsp;</td>
                                            <td width="0" height="0"><strong>House No./Name <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control"  name="stfhousenam" id="stfhousenam" value="%{staffdetails[0][28]}" onkeyup="callpermaddress()"/><i id="stfhousenamError" class="text-danger mn"></i>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>Colony / Street / Locality <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><s:textfield cssClass="form-control" name="stfhousestreet" id="stfhousestreet" value="%{staffdetails[0][29]}" onkeyup="callpermaddress()"/>
                                                <i id="stfhousestreetError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0">&nbsp;</td>
                                            <td width="0" height="0"><strong>Town/City <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfhousecity" id="stfhousecity" value="%{staffdetails[0][30]}" onkeyup="callpermaddress()" /></div>
                                                <i id="stfhousecityError" class="text-danger mn"></i></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>District <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><div class="col-xs-6">
                                                    <s:select cssClass="form-control"
                                                              id="stfdist" 
                                                              name="stfdist"
                                                              list="distlist"
                                                              headerKey="-1"
                                                              value="%{staffdetails[0][31]}" 
                                                              headerValue="Select"
                                                              onchange="callpermaddress()"
                                                              />

                                                    <%--<s:textfield cssClass="form-control"  name="stfdist" id="stfdist" onkeypress="return isNumber(event)" onkeyup="callpermaddress()" value="%{staffdetails[0][31]}"/> --%> </div>
                                                <i id="stfdistError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0">&nbsp;</td>
                                            <td width="0" height="0"><strong>State <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6"><s:select cssClass="form-control"
                                                          id="stfstate" 
                                                          name="stfstate"
                                                          list="statelist"
                                                          headerKey="-1"
                                                          value="%{staffdetails[0][32]}" 
                                                          headerValue="Select"
                                                          onchange="callpermaddress()"
                                                          /><i id="stfstateError" class="text-danger mn"></i></div>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>Pincode <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfpin" id="stfpin" onkeypress="return isNumber(event)" onkeyup="callpermaddress()" maxLength="6" value="%{staffdetails[0][34]}"/></div>
                                                <i id="stfpinError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0">&nbsp;</td>
                                            <td width="0" height="0"><strong>Country <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6">
                                                    <s:select cssClass="form-control"
                                                          id="stfcountry" 
                                                          name="stfcountry"
                                                          list="cntrylist"
                                                          
                                                          value="%{staffdetails[0][33]}" 
                                                          
                                                          onchange="callpermaddress()"
                                                          />
                                                    
                                                    <i id="stfcountryError" class="text-danger mn"></i></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>Mobile Number <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfmobile" id="stfmobile" value="%{staffdetails[0][18]}" onkeypress="return isNumber(event)" onkeyup="callpermaddress()" maxLength="10"/></div>
                                                <i id="stfmobileError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>Email</strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfemail" id="stfemail" value="%{staffdetails[0][20]}" onkeyup="callpermaddress()"/></div>
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>

                                            <td colspan="5"><div align="right">
                                                    <i  class="text-danger mn">Current and Permanent Address Similar... Click </i> <s:checkbox id="chkpermaddr" name="chkpermaddr" onclick="callpermaddress()"/></div></td>
                                        </tr>
                                    </table>

                                </div></div>
                        </div>





                        <div class="col-md-6">


                            <div class="panel panel-alert">
                                <div class="panel-body border">


                                    <table width="100%"  border="0" cellpadding="0" cellspacing="0"  class="un_table" >
                                        <tr>
                                            <td width="0" rowspan="10"><div style="width:4px; height: 100%; background-color:#FF0000;"></div></td>
                                            <th height="0"><b class="text-primary mn size-1">Permanent Address </b></th>
                                            <td height="0">&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>House No./Name <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><s:textfield cssClass="form-control"  name="permstfhousenam" id="permstfhousenam" value="%{staffdetails[0][65]}"/><i id="permstfhousenamError" class="text-danger mn" ></i>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="0"><strong>Colony / Street / Locality <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><s:textfield cssClass="form-control" name="permstfhousestreet" id="permstfhousestreet" value="%{staffdetails[0][66]}"/>
                                                <i id="stfhousestreetError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Town/City <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="permstfhousecity" id="permstfhousecity" onkeypress="return isNumber(event)" value="%{staffdetails[0][67]}"/></div>
                                                <i id="stfhousecityError" class="text-danger mn"></i></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="0"><strong>District <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><div class="col-xs-6">

                                                    <s:select cssClass="form-control"
                                                              id="permstfdist" 
                                                              name="permstfdist"
                                                              list="distlist"
                                                              headerKey="-1"
                                                              value="%{staffdetails[0][68]}"
                                                              headerValue="Select"
                                                              onchange="callpermaddress()"
                                                              />

                                                    <%-- <s:textfield cssClass="form-control"  name="permstfdist" id="permstfdist" onkeypress="return isNumber(event)" value="%{staffdetails[0][68]}"/> --%>


                                                </div>
                                                <i id="stfdistError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>State <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0">
                                                <div class="col-xs-6"><s:select cssClass="form-control"
                                                          id="permstfstate" 
                                                          name="permstfstate"
                                                          list="statelist"
                                                          headerKey="-1"
                                                          headerValue="Select"
                                                          value="%{staffdetails[0][69]}"
                                                          /><i id="stfstateError" class="text-danger mn"></i></div>                                        </td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="0"><strong>Pincode <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="permstfpin" id="permstfpin" onkeypress="return isNumber(event)" maxLength="6" value="%{staffdetails[0][72]}"/></div>
                                                <i id="stfpinError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="0" height="0"><strong>Country <i class="text-danger mn"> *</i></strong></td>
                                            <td width="0" height="0"><div class="col-xs-6">
                                                     <s:select cssClass="form-control"
                                                          id="permstfcountry" 
                                                          name="permstfcountry"
                                                          list="cntrylist"
                                                          
                                                          value="%{staffdetails[0][70]}" 
                                                          
                                                          onchange="callpermaddress()"
                                                          />
                                                    
                                                     <i id="stfcountryError" class="text-danger mn"></i></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td height="0"><strong>Phone Number <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="permstfmobile" id="permstfmobile" onkeypress="return isNumber(event)" maxLength="10"  value="%{staffdetails[0][19]}"/></div>
                                                <i id="stfmobileError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td height="0"><strong>Email</strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="permstfemail" id="permstfemail"  value="%{staffdetails[0][20]}"/></div>
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td colspan="5"><div style="height:22px;">&nbsp;
                                                </div></td>                                            </tr>

                                    </table>


                                </div>


                            </div></div>










                        <div class="col-md-12">			




                            <div class="panel panel-alert">
                                <div class="panel-body border">
                                    <table width="100%"  border="0" cellpadding="0" cellspacing="0"  class="un_table">

                                        <tr>
                                            <th height="0"><b class="text-primary mn size-1">Other Details </b></th>
                                            <td height="0">&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="0"><strong>Bank Name <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfbankname" id="stfbankname" value="%{staffdetails[0][23]}" onkeypress="return ValidateAlpha(event)"/> </div>
                                                <i id="stfbanknameError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>Account No <i class="text-danger mn"> *</i></strong> </td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfbankacc" id="stfbankacc" value="%{staffdetails[0][21]}" onkeypress="return isNumber(event)"/></div>
                                                <i id="stfbankaccError" class="text-danger mn"></i></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="0"><strong>IFSC Code</strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfifsc" id="stfifsc" value="%{staffdetails[0][22]}"/></div>
                                                <i id="stfifscError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                            <td height="0"><strong>PAN No </strong> </td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfpanno" id="stfpanno" value="%{staffdetails[0][26]}"/></div>
                                                <i id="stfpannoError" class="text-danger mn"></i></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <%--<td height="0"><strong>PF No.</strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfpfno" id="stfpfno" /></div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>
<td>&nbsp;</td> --%>
                                            <td height="0"><strong>ESI No</strong> </td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control" name="stfesino" id="stfesino" value="%{staffdetails[0][25]}"/></div>
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td height="0"><strong>Aadhar No. <i class="text-danger mn"> *</i></strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfadhar" id="stfadhar"  value="%{staffdetails[0][47]}"/></div>
                                                <i id="stfadharError" class="text-danger mn"></i></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>

                                            <td height="0"> <strong>Election ID </strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfelection" id="stfelection" value="%{staffdetails[0][45]}"/></div>
                                                <div class="type-text"> <span id="vehdealaddressError"></span></div></td>
                                            <td width="10%">&nbsp;</td>
                                            <td height="0"><strong>UAN No.</strong></td>
                                            <td height="0"><div class="col-xs-6"><s:textfield cssClass="form-control"  name="stfuanno" id="stfuanno" value="%{staffdetails[0][46]}" onkeypress="return isNumber(event)"/></div>
                                                <div class="type-text"> <span id="vehchqnoError"></span></div></td>
                                            <td>&nbsp;</td>
                                        </tr>

                                        <tr>

                                            <td width="0" height="0"><strong>Remarks </strong></td>
                                            <td width="0" height="0"><div class="col-xs-6"><s:textarea cssClass="form-control" name="stfremarks" id="stfremarks"/></div></td>
                                            <td width="10%">&nbsp;</td>
                                        </tr>

                                        <tr>

                                            <td width="0" height="0"></td>
                                            <td width="0" height="0"></td>
                                            <td width="10%"></td>
                                        </tr>
                                        <tr>
                                            <td height="0" colspan="6" align="center" valign="middle">

                                                <s:if test="staffdetails.size()>0"> 

                                                    <div style="width: 100px" align="center" id="svresult"> 
                                                        <s:url  var="updremote" action="staffactionsave" escapeAmp="false">
                                                            <s:param name="process">stfupd</s:param>

                                                        </s:url>

                                                        <sj:submit 
                                                            href="%{updremote}"
                                                            cssClass="btn active btn-danger"
                                                            formIds="frm1"
                                                            targets="homemain2s"
                                                            name="stfupd"
                                                            id="stfupd"
                                                            align="center"
                                                            button="true"
                                                            value="Update"
                                                            indicator="indicator"
                                                            validateFunction="customeValidation"
                                                            />
                                                    </div>
                                                </s:if>

                                                <s:else>
                                                    <div style="width: 100px" align="center" > 
                                                        <s:url  var="saveremote" action="staffactionsave" escapeAmp="false">
                                                            <s:param name="process">stfsave</s:param>

                                                        </s:url>
                                                        <sj:submit
                                                            href="%{saveremote}"
                                                            formIds="frm1"
                                                            targets="homemain2s"

                                                            name="stfsave"
                                                            id="stfsave"
                                                            cssClass="btn active btn-primary"
                                                            align="center"
                                                            button="true"
                                                            value="Save"
                                                            validate="true"
                                                            validateFunction="customeValidation"
                                                            indicator="indicator"

                                                            />

                                                    </div>
                                                </s:else>


                                            </td><strong><font color="red"> <s:property value="echo" /></font></strong>
                                    </table>			  
                                </div>
                            </div></div>




                        <%-- </s:iterator> --%>

                    </div>
                </div>


            </div>

        </s:form>                             
    </body>
</html>
