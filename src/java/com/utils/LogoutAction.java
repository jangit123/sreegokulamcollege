/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.utils;

import com.opensymphony.xwork2.ActionSupport;
import com.utils.dao.ChitDao;
import com.utils.dao.impl.ChitdaoImpl;
import java.util.Map;

import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;

/**
 *
 * @author Pranzz
 */
public class LogoutAction extends ActionSupport implements SessionAware {

    private SessionMap<String, String> sessionmap;
    private Map map;
    private String echo = "";
    ChitDao cd = new ChitdaoImpl();

    public LogoutAction() {
    }

    public String execute() throws Exception {
        System.out.println("sessionmap"+sessionmap);
        if (sessionmap != null) {
            String logouttime = cd.getuniqueresult("select to_char(sysdate,'hh:mm:ssam') from dual");
            String updqry = "update loginstatus set logout='Y',logout_tm='" + logouttime + "' where username='" + sessionmap.get("loginuser") + "' and id='" + sessionmap.get("loginid") + "' and logout='N'";
            System.out.println("updqry............." + updqry);
            cd.update(updqry);
            sessionmap.invalidate();
            echo = "You are being successfully logged out";

            return "logout";
        } else {
            echo = "Your session ended...##. Please Login again...";
            return "input";
        }

    }

    public SessionMap<String, String> getSessionmap() {
        return sessionmap;
    }

    public String getEcho() {
        return echo;
    }

    public void setEcho(String echo) {
        this.echo = echo;
    }

    public void setSession(SessionMap<String, String> sessionmap) {
        this.sessionmap = sessionmap;
    }

    public void setSession(Map map) {
        sessionmap = (SessionMap) map;
        //sessionmap.put("loginuser","true");  
    }

}
