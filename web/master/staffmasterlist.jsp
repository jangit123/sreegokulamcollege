<%-- 
    Document   : staffmasterlist
    Created on : 28 Dec, 2016, 11:27:27 AM
    Author     : Surya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%@taglib prefix="s" uri="/struts-tags"%>
        <%@taglib prefix="sj" uri="/struts-jquery-tags" %>
        <script type="text/javascript">
            function submitvalue(id)
            {

                document.getElementById('process').value = id;
            }
            function call_srchlist() {
                $('#contentdiv').fadeOut(200);
                var searchval = document.getElementById('stfsearch').value;
                $.ajax({
                    url: '<s:url action='staffactionsave'/>',
                    type: "POST",
                    data: {process: 'search', stfsearch: searchval},
                    dataType: 'html',
                    success: function(html) {
                        $('#contentdiv').show(200);
                        $('#contentdiv').html(html);
                        // document.getElementById('contentdiv').innerHTML = staffdetails;
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('An error occurred! ' + thrownError);
                    }
                });
            }

        </script>
    </head>
    <body >
        <s:form  name="frm" id="frm" theme="simple" cssClass="xhtml">
            <div class="col-md-12"> 

<div class="col-md-12"> <div class="col-md-2"> 
                <div id="srchdiv">

                    <s:textfield name="stfsearch" id="stfsearch"  onkeyup="call_srchlist()" cssClass="form-control" placeholder="Search Name or StaffID Here..."/>

                    
                </div> </div>
                    
                    <div class="col-md-2">
                    <s:url  var="addremote" action="staffactionsave" escapeAmp="false">
                        <s:param name="process">stfadd</s:param>

                    </s:url><sj:submit 
                        href="%{addremote}"
                        name="stfadd" 
                        id="stfadd"
                        targets="contentdiv"                                                        
                        onclick="submitvalue(this.id)"
                        formIds="frm" 
                        type="image" 
                        value="Add"
                        indicator="indicator"
                        src="images/add-list-512.png"
                        height="30px"
                        width="30px"  
                        /> 
                </div>
                </div>
                  <div class="col-md-12">  
                <div id="contentdiv">
                    <s:if test="process=='nil'"><s:action name="staffactionlist" executeResult="true" flush="true" /></s:if>
                    </div>
            </div> </div>

        </s:form>
    </body>
</html>
