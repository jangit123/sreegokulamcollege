package com.utils.map;
// Generated 30 Dec, 2016 1:24:09 PM by Hibernate Tools 3.6.0


import java.util.Date;

/**
 * Submenumaster generated by hbm2java
 */
public class Submenumaster  implements java.io.Serializable {


     private String id;
     private String menuid;
     private String submenu;
     private String pagelink;
     private String enteredby;
     private Date entereddt;
     private String menuorder;
     private Character status;

    public Submenumaster() {
    }

	
    public Submenumaster(String id) {
        this.id = id;
    }
    public Submenumaster(String id, String menuid, String submenu, String pagelink, String enteredby, Date entereddt, String menuorder, Character status) {
       this.id = id;
       this.menuid = menuid;
       this.submenu = submenu;
       this.pagelink = pagelink;
       this.enteredby = enteredby;
       this.entereddt = entereddt;
       this.menuorder = menuorder;
       this.status = status;
    }
   
    public String getId() {
        return this.id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    public String getMenuid() {
        return this.menuid;
    }
    
    public void setMenuid(String menuid) {
        this.menuid = menuid;
    }
    public String getSubmenu() {
        return this.submenu;
    }
    
    public void setSubmenu(String submenu) {
        this.submenu = submenu;
    }
    public String getPagelink() {
        return this.pagelink;
    }
    
    public void setPagelink(String pagelink) {
        this.pagelink = pagelink;
    }
    public String getEnteredby() {
        return this.enteredby;
    }
    
    public void setEnteredby(String enteredby) {
        this.enteredby = enteredby;
    }
    public Date getEntereddt() {
        return this.entereddt;
    }
    
    public void setEntereddt(Date entereddt) {
        this.entereddt = entereddt;
    }
    public String getMenuorder() {
        return this.menuorder;
    }
    
    public void setMenuorder(String menuorder) {
        this.menuorder = menuorder;
    }
    public Character getStatus() {
        return this.status;
    }
    
    public void setStatus(Character status) {
        this.status = status;
    }




}


