package com.utils.map;
// Generated 30 Dec, 2016 1:24:09 PM by Hibernate Tools 3.6.0


import java.util.Date;

/**
 * Menumaster generated by hbm2java
 */
public class Menumaster  implements java.io.Serializable {


     private String id;
     private String menu;
     private String menuorder;
     private String enteredby;
     private Date entereddt;

    public Menumaster() {
    }

	
    public Menumaster(String id) {
        this.id = id;
    }
    public Menumaster(String id, String menu, String menuorder, String enteredby, Date entereddt) {
       this.id = id;
       this.menu = menu;
       this.menuorder = menuorder;
       this.enteredby = enteredby;
       this.entereddt = entereddt;
    }
   
    public String getId() {
        return this.id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    public String getMenu() {
        return this.menu;
    }
    
    public void setMenu(String menu) {
        this.menu = menu;
    }
    public String getMenuorder() {
        return this.menuorder;
    }
    
    public void setMenuorder(String menuorder) {
        this.menuorder = menuorder;
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




}


