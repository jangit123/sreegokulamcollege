<%-- 
    Document   : staffmasterlistcontent
    Created on : 11 Jan, 2017, 10:01:51 AM
    Author     : Surya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib prefix="sj" uri="/struts-jquery-tags" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>

    </head>
    <body>
        <div class="panel panel-primary">
            <div class="panel-heading">
                Staff Master 
                <div class="widget-menu pull-right">
                    <code class="mr10 bg-primary dark p3 ph5"><span style="color: #99ffff; font-weight: bold"><s:property value="echo" /></span>
                    </code>
                </div>
            </div>
            <div class="panel-body">
                <p>
                <table class="table table-striped table-hover">
                    <thead>

                        <tr>
                            <th>Sl.No</th>
                            <th>STAFF ID</th>
                            <th>NAME</th>
                            <th>DESIGNATION</th>
                            <th>DEPARTMENT</th>
                            
                            <th>Sel</th>
                        </tr>
                    </thead>
                    <tbody>

                        <s:iterator  value="staffdetails" var="staf" status="st">
                            <tr>
                                <td><s:property value="#st.index+1"/></td>
                                <td><s:property value="%{#staf[1]}"/></td>
                                <td><s:property value="%{#staf[2]}"/>.<s:property value="%{#staf[3]}"/>&nbsp;<s:property value="%{#staf[4]}"/></td>
                                <td><s:property value="%{#staf[11]}"/></td>
                                <td><s:property value="%{#staf[9]}"/></td>
                                
                                <td><s:url id="master%{#st.index}" var="remote" action="staffactionsave" escapeAmp="false">
                                        <s:param name="process">edit</s:param>
                                        <s:param name="stfeditid"><s:property value="#staf[1]"/></s:param>
                                    </s:url>
                                    <sj:submit  href="%{remote}"
                                                name="stfedit" 
                                                id="stfedit%{#st.index}"
                                                targets="contentdiv"  
                                                formIds="frm" 
                                                type="image"                                                
                                                image="true"
                                                src="images/Edit-icon.png"
                                                indicator="indicator"
                                                height="25px"
                                                width="25px"                                   
                                                />
                                </td>
                            </tr>
                        </s:iterator>

                    </tbody>
                </table>

                </p>
            </div>
        </div>
    </body>
</html>
