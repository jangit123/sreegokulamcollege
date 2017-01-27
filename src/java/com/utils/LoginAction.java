/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.utils;

import static com.opensymphony.xwork2.Action.SUCCESS;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.validator.annotations.Validations;
import com.utils.dao.ChitDao;
import com.utils.dao.impl.ChitdaoImpl;



import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;

/**
 *
 * @author Pranzz
 */

public class LoginAction extends ActionSupport implements SessionAware {

    private String username;
    private String password;
    private String ip_address;
    private String host_name;
    private String ser_point;
    private Map map;
    private String masters;
    public String name1;
    public String staffid;
    private List list;
    private String message;
    private String echo;
    private Map<String, String> service_list;

    private List<String> staffdetails = new ArrayList<String>();
    private List<Object[]> menumap;
    private List<Object[]> submenumap;
    private ChitDao st = new ChitdaoImpl();
    private SessionMap<String, String> sessionmap;
    private List namesrchlist = new ArrayList();
    private String warningmessage = "";

    public LoginAction(String username, String password) {
        this.username = username;
        this.password = password;
    }
    private static final Logger LOG = Logger.getLogger(LoginAction.class.getName());

    public LoginAction() {
    }

    //Section setting     
    public void setSession(Map map) {
        sessionmap = (SessionMap) map;
        //sessionmap.put("loginuser","true");  
    }

    public String execute() throws Exception {
       
        String staffid = "";
        String flashmessage = "";
        String flashmessage1 = "";
        String flashmessage2 = "";
        list = new ArrayList();
        String s1 = null;
        String logindesig = "";
        String loggeduser = "";
        String master = "master";
        service_list = new HashMap();
        sessionmap.put("password", password);
        sessionmap.put("name", username);
        if (username == null || password == null) {
            setEcho("Blank not allowed....");
            return "input";
        } else {
            staffdetails = st.login(username, password);
            System.out.println("sessionmap................." + sessionmap);
            System.out.println("staffdetails.size()" + staffdetails.size());
            if (staffdetails.size() > 0) {
                String greetingmsg = st.getuniqueresult("select greetings from salutations where to_char(sysdate,'HH24:MMAM') between starttime and endtime");
                String roleid = st.getuniqueresult("select trim(roleid) from usermaster where upper(username)='" + username.toUpperCase() + "'");
               
                    staffid = st.getuniqueresult("select trim(staffid) from usermaster where upper(username)='" + username.toUpperCase() + "'");
                   // loggeduser = st.getuniqueresult("select GetEMPTITLE('" + staffid + "')||getname('" + staffid + "') from dual");
               

                String collegeid = st.getuniqueresult("select trim(collegeid) from usermaster where upper(username)='" + username.toUpperCase() + "'");
               // String loginuser = st.getuniqueresult("select trim(username) from usermaster where upper(agentid)='" + username.toUpperCase() + "'");
               // String branch = st.getuniqueresult("select hbrnid||'-'||getbr(hbrnid) from usermaster where upper(agentid)='" + username.toUpperCase() + "'");
               // String msg1 = st.getuniqueresult("select to_char(count(*)) from messages where active='Y' and  RECEIVEDTOALL='Y'");
               // if (Integer.parseInt(msg1) > 0) {
                //    flashmessage1 = st.getmultiresult("select message from messages where active='Y' and  RECEIVEDTOALL='Y'");
                 //   flashmessage2 = st.getmultiresult("select message from messages where active='Y' and send_to='" + roleid + "' and RECEIVEDTOALL='N'");
                //    flashmessage = flashmessage1 + " " + flashmessage2;
               // } else {
                  //  flashmessage = st.getmultiresult("select message from messages where active='Y' and send_to='" + roleid + "' and RECEIVEDTOALL='N'");
               // }
            
               
                menumap = st.menulist(roleid);

                submenumap = st.submenulist(roleid);
                if (submenumap.size() > 0) {
                    sessionmap.put("user", username);
                    sessionmap.put("loginuser", username);
                    sessionmap.put("master", roleid);
                    sessionmap.put("collegeid", collegeid);
                   // sessionmap.put("branch", branch);
                    sessionmap.put("roleid", roleid);
                   
                   // sessionmap.put("designation", logindesig);
                    sessionmap.put("staffid", staffid);
                    sessionmap.put("greetmsg", greetingmsg);
                    sessionmap.put("loggeduser", loggeduser);

                    //String id, String hbrnid, String username,  Date loginDt, String loginTm
                   // String logid = st.getuniqueresult("select to_char(login_seq.nextval) from dual");
                   // sessionmap.put("loginid", logid);
                    //String logtime = st.getuniqueresult("select to_char(sysdate,'hh:mm:ssam') from dual");
                  
                   // String qrycheck = st.getuniqueresult("select querydata from  querymaster where id=31");
                   // qrycheck = qrycheck.replaceAll("brid", collegeid.toUpperCase().trim());
                   // System.out.println("qrycheck" + qrycheck);
                  //  String chkcount = st.getuniqueresult(qrycheck);
                   // if (chkcount.equals("0") && (roleid.equals("6") || roleid.equals("7") || roleid.equals("10"))) {
                     //   String qry = "select querydata from querymaster where id=30 ";
                     //   warningmessage = st.getuniqueresult(qry);
                   // } else {
                        warningmessage = "Welcome To Sree Gokulam Arts n Science College...!!!!";
                   // }

                }
                return "masters";
            } else if (sessionmap == null) {
                setEcho("Your session ended...##. Please Login again...");
                sessionmap.invalidate();
                return "login";
            } else if (staffdetails.isEmpty()) {
                username = "";
                password = "";
                setEcho("Invalid password / user...");
                sessionmap.invalidate();
                return "input";
            } else {
                setEcho("Your session ended...##... Please Login again...");
                return "input";
            }
        }

    }

    public String welcomemessage() throws Exception {
        return SUCCESS;
    }

    public String loadsession() throws Exception {
        return SUCCESS;
    }

    @Override
    public void validate() {
        if (username != null) {
            if (username.trim().length() == 0) {
                username = "";
                addFieldError("username", "Enter Username...");
            }
        }
        if (password != null) {
            if (password.trim().length() == 0) {
                password = "";
                addFieldError("password", "Enter Password...");
            }
        }

    }

    /**
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    public String getIp_address() {
        return ip_address;
    }

    public void setIp_address(String ip_address) {
        this.ip_address = ip_address;
    }

    public String getHost_name() {
        return host_name;
    }

    public void setHost_name(String host_name) {
        this.host_name = host_name;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the service_list
     */
    public Map<String, String> getService_list() {
        return service_list;
    }

    /**
     * @return the masters
     */
    public String getMasters() {
        return masters;
    }

    /**
     * @param masters the masters to set
     */
    public void setMasters(String masters) {
        this.masters = masters;
    }

    /**
     * @return the message
     */
    public String getMessage() {
        return message;
    }

    /**
     * @param message the message to set
     */
    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * @return the staffdetails
     */
    public List<String> getStaffdetails() {
        return staffdetails;
    }

    /**
     * @param staffdetails the staffdetails to set
     */
    public void setStaffdetails(List<String> staffdetails) {
        this.staffdetails = staffdetails;
    }

    /**
     * @return the menumap
     */
    public List<Object[]> getMenumap() {
        return menumap;
    }

    /**
     * @param menumap the menumap to set
     */
    public void setMenumap(List<Object[]> menumap) {
        this.menumap = menumap;
    }

    /**
     * @return the submenumap
     */
    public List<Object[]> getSubmenumap() {
        return submenumap;
    }

    /**
     * @param submenumap the submenumap to set
     */
    public void setSubmenumap(List<Object[]> submenumap) {
        this.submenumap = submenumap;
    }

    /**
     * @return the st
     */
    public ChitDao getSt() {
        return st;
    }

    /**
     * @param st the st to set
     */
    public void setSt(ChitDao st) {
        this.st = st;
    }

    /**
     * @return the sessionmap
     */
    public SessionMap<String, String> getSessionmap() {
        return sessionmap;
    }

    /**
     * @param sessionmap the sessionmap to set
     */
    public void setSessionmap(SessionMap<String, String> sessionmap) {
        this.sessionmap = sessionmap;
    }

    public String getEcho() {
        return echo;
    }

    public void setEcho(String echo) {
        this.echo = echo;
    }

    public List getNamesrchlist() {
        return namesrchlist;
    }

    public void setNamesrchlist(List namesrchlist) {
        this.namesrchlist = namesrchlist;
    }

    public String getWarningmessage() {
        return warningmessage;
    }

    public void setWarningmessage(String warningmessage) {
        this.warningmessage = warningmessage;
    }

}
