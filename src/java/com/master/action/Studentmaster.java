/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.master.action;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.validator.annotations.Validations;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

/**
 *
 * @author Anju
 */

@ParentPackage(value = "my-package")
@InterceptorRef("SessionCheckInterceptor")
@Validations(requiredStrings = {})
public class Studentmaster extends ActionSupport {
    
    private String admissionNo;
    private String admndt;
    public Studentmaster() {
    }
    
    @Action(value = "studentmaster", results = {
    @Result(name = "success", location = "/master/StudentMaster.jsp")
    })
    public String execute() throws Exception {
        return SUCCESS;
    }

    public String getAdmissionNo() {
        return admissionNo;
    }

    public void setAdmissionNo(String admissionNo) {
        this.admissionNo = admissionNo;
    }

    public String getAdmndt() {
        return admndt;
    }

    public void setAdmndt(String admndt) {
        this.admndt = admndt;
    }
    
}
