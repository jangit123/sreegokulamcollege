/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.utils;

import com.opensymphony.xwork2.ActionSupport;
import com.utils.dao.ChitDao;
import com.utils.dao.impl.ChitdaoImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;

/**
 *
 * @author SREE
 */
public class MainHome extends ActionSupport implements SessionAware {

    private Map map;
    private SessionMap<String, String> sessionmap;
    private List<String> staffdetails = new ArrayList<String>();
    private List<Object[]> menumap;
    private List<Object[]> submenumap;
    private ChitDao st = new ChitdaoImpl();
   
    public MainHome() {
    }

    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpSession session = request.getSession();
        String username = (String) session.getAttribute("loginuser");
        String logindesig = "";
        String staffid = "";

        String loggeduser = "";
        System.out.println("username" + username);
        if (username != null) {

            String roleid = st.getuniqueresult("select trim(roleid) from usermaster where upper(username)='" + username.toUpperCase() + "'");
          
                staffid = st.getuniqueresult("select trim(staffid) from usermaster where upper(username)='" + username.toUpperCase() + "'");
               // loggeduser = st.getuniqueresult("select GetEMPTITLE('" + staffid + "')||getname('" + staffid + "') from dual");
               // logindesig = st.getuniqueresult("select  salarynew.GETDES('" + staffid + "') from dual");
           
            String collegeid = st.getuniqueresult("select trim(collegeid) from usermaster where upper(username)='" + username.toUpperCase() + "'");
           // String loginuser = st.getuniqueresult("select trim(username) from usermaster where upper(username)='" + username.toUpperCase() + "'");
          //  String branch = st.getuniqueresult("select hbrnid||'-'||getbr(hbrnid) from usermaster where upper(username)='" + username.toUpperCase() + "'");
          //  String msg = st.getmultiresult("select message from messages where active='Y'");

           // sessionmap.put("message", msg);

          //  System.out.println("loginuser" + loginuser);
            System.out.println("username" + username);
            System.out.println("roleid" + roleid);
            menumap = st.menulist( roleid);

            submenumap = st.submenulist(roleid);
            if (submenumap.size() > 0) {
                sessionmap.put("user", username);
                sessionmap.put("loginuser", username);
                sessionmap.put("master", roleid);
                sessionmap.put("collegeid", collegeid);
               // sessionmap.put("branch", branch);
                sessionmap.put("roleid", roleid);
                //sessionmap.put("username", loginuser);
                sessionmap.put("designation", logindesig);
                sessionmap.put("staffid", staffid);
                //String id, String hbrnid, String username,  Date loginDt, String loginTm
                //String logid = st.getuniqueresult("select to_char(login_seq.nextval) from dual");
               // sessionmap.put("loginid", logid);
                String logtime = st.getuniqueresult("select to_char(sysdate,'hh:mm:ssam') from dual");
                //Loginstatus ls = new Loginstatus(logid, branchid, username, 'N', new Date(), logtime);
                //st.savemaster(ls);
            }
            return SUCCESS;

        } else {
            return INPUT;

        }
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

    public void setSession(Map map) {
        sessionmap = (SessionMap) map;
        //sessionmap.put("loginuser","true");  
    }

    public List<String> getStaffdetails() {
        return staffdetails;
    }

    public void setStaffdetails(List<String> staffdetails) {
        this.staffdetails = staffdetails;
    }

    public List<Object[]> getMenumap() {
        return menumap;
    }

    public void setMenumap(List<Object[]> menumap) {
        this.menumap = menumap;
    }

    public List<Object[]> getSubmenumap() {
        return submenumap;
    }

    public void setSubmenumap(List<Object[]> submenumap) {
        this.submenumap = submenumap;
    }

}
