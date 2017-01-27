/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.master.action;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.validator.annotations.Validations;

import com.utils.dao.ChitDao;
import com.utils.dao.impl.ChitdaoImpl;
import com.utils.map.Staffmaster;
import com.utils.session.HBSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import oracle.sql.BLOB;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.tomcat.util.codec.binary.Base64;
import org.hibernate.Session;

/**
 *
 * @author Surya
 */
@ParentPackage(value = "my-package")
@InterceptorRef("SessionCheckInterceptor")
@Validations(requiredStrings = {})
public class StaffMasterAction extends ActionSupport {

    ChitDao art = new ChitdaoImpl();
    private String stfname = "";
    private String stfdob = "";
    private String stfsex = "";
    private String stfnation = "";
    private String stfquali = "";
    private String stfbloodgrp = "";
    private String stfrelig;
    private String stfcaste;
    private String stfcastnam = "";
    private String stfguard = "";
    private String stfdoj = "";
    private String stfstftyp = "";

    private String stfdesig = "";
    private String stfdept = "";
    private String stfsubhandl = "";
    private String stfclshandl = "";
    private String stfhousenam = "";
    private String stfhousestreet = "";
    private String stfhousecity = "";
    private String stfdist;
    private String stfstate;
    private String stfpin = "";
    private String stfcountry = "";
    private String stfmobile = "";
    private String stfemail = "";
    private String process = "nil";
    private String title = "";
    private String stflastnam = "";
    private String stfmaritialstat = "";
    private String stfexperi = "";
    private String stfbankname = "";
    private String stfbankacc = "";
    private String stfifsc = "";
    private String stfpanno = "";
    private String stfpfno = "";
    private String stfesino = "";
    private Boolean stftut;
    private String stfnonteachexp = "";
    private String stfconfirmdt = "";
    private String stfcareof = "";
    private String stfuanno = "";
    private String stfelection = "";
    private String stfadhar = "";
    private String echo;
    String qry = "";
    private List staffdetails = new ArrayList();
    private String stfeditid;
    private LinkedHashMap<String, String> castelist = new LinkedHashMap<String, String>();
    private LinkedHashMap<String, String> religionlist = new LinkedHashMap<String, String>();
    private LinkedHashMap<String, String> statelist = new LinkedHashMap<String, String>();
    private LinkedHashMap<String, String> bloodlist = new LinkedHashMap<String, String>();
    private LinkedHashMap<String, String> stypelist = new LinkedHashMap<String, String>();
    private LinkedHashMap<String, String> qualilist = new LinkedHashMap<String, String>();
    private LinkedHashMap<String, String> distlist = new LinkedHashMap<String, String>();
    private LinkedHashMap<String, String> deplist = new LinkedHashMap<String, String>();
    private LinkedHashMap<String, String> desiglist = new LinkedHashMap<String, String>();
    private LinkedHashMap<String, String> cntrylist = new LinkedHashMap<String, String>();
    private boolean updstff;
    private String stffid = "";
    private String stfhadicap = "";
    private String stfsearch = "";
    private String term;
    private String permstfhousenam = "";
    private String permstfhousestreet = "";
    private String permstfhousecity = "";
    private String permstfdist = "";
    private String permstfstate = "";
    private String permstfpin = "";
    private String permstfcountry = "";
    private String permstfmobile = "";
    private String permstfemail = "";
    private String stfmodeofapp = "";
    private String stfhod;
    private String stfphoto;
    private String staffphoto;
    private String stfremarks;

    HttpServletRequest request = ServletActionContext.getRequest();
    HttpSession session = request.getSession();

    String username = (String) session.getAttribute("loginuser");
    String cid = (String) session.getAttribute("collegeid");

    public StaffMasterAction() {
    }

    @Action(value = "/staffmaster", results = {
        @Result(name = "success", location = "/master/staffmasterlist.jsp")})
    public String execute() throws Exception {

        qry = art.getuniqueresult("select querydata from  querymaster where id=1");
        staffdetails = art.searchdata(qry);
        return SUCCESS;
    }

    public void loadall() throws Exception {
        String castqry = "select ID,CASTE from CASTEMASTER";
        castelist = art.querymaster(castqry);
        String relqry = "select ID,RELIGION from RELIGIONMASTER";
        religionlist = art.querymaster(relqry);
        String stateqry = "select sno,state from STATEMASTER";
        statelist = art.querymaster(stateqry);
        String bllodqry = "select id,bloodgroup from BLOODGROUPMASTER";
        bloodlist = art.querymaster(bllodqry);
        String stypeqry = "select sno,STAFFTYPE from STAFFTYPEMASTER";
        stypelist = art.querymaster(stypeqry);

        String distqry = "select id,DISTRICT from DISTRICTMASTER";
        distlist = art.querymaster(distqry);

        String depqry = "select depid,deptname from DEPARTMENTMASTER";
        deplist = art.querymaster(depqry);
        String desigqry = "SELECT DESIGID,DESIGNAME FROM DESIGNATIONMASTER";
        desiglist = art.querymaster(desigqry);
        String cntqry = "SELECT SNO,COUNTRY FROM COUNTRYMASTER";
        cntrylist = art.querymaster(cntqry);
    }

    @Action(value = "autocomp", results = {
        @Result(name = "success", type = "json")
    })
    public String loadcomb() throws Exception {
        String qualiqry = "select id,QUALIFICATION from QUALIFICATION_MASTER where upper(QUALIFICATION) like  upper(trim('" + term + "%')) ORDER BY QUALIFICATION";
        qualilist = art.querymaster(qualiqry);
        return SUCCESS;
    }

    @Action(value = "staffactionsave", results = {
        @Result(name = "listed", location = "/master/staffmasterlistcontent.jsp"),
        @Result(name = "editload", location = "/master/Staffmaster.jsp"),
        @Result(name = "addstaff", location = "/master/Staffmaster.jsp"),
        @Result(name = "updated", location = "staffmaster", type = "redirectAction", params = {"echo", "${echo}"}),
        @Result(name = "success", location = "simpleecho.jsp"),
        @Result(name = "backtomain", location = "/master/staffmasterlistcontent.jsp"),
        @Result(name = "saved", location = "staffmaster", type = "redirectAction", params = {"echo", "${echo}"}),
        @Result(name = "input", location = "/master/Staffmaster.jsp")
    })
    public String staffdata() throws Exception {

        System.out.println("process_________" + process);
        if (process.equals("stfsave")) {

            if (savestaff()) {
                setEcho("Saved Successfully...");

            } else {
                setEcho("Error...");
            }
            return "saved";
        } else if (process.equals("stfadd")) {
            loadall();

            return "addstaff";
        } else if (process.equals("edit")) {

            loadall();
            staffeditload();

            return "editload";
        } else if (process.equals("stfupd")) {
            staffedit();
            setEcho("Updated Successfully...");
            qry = art.getuniqueresult("select querydata from  querymaster where id=1");
            staffdetails = art.searchdata(qry);
            return "updated";
        } else if (process.equals("search")) {

            staffsearching();
            return "listed";
        } else if (process.equals("listback")) {
            qry = art.getuniqueresult("select querydata from  querymaster where id=1");
            staffdetails = art.searchdata(qry);
            return "backtomain";
        }

        return SUCCESS;

    }

    public void staffsearching() throws Exception {
        process = "search";

        qry = art.getuniqueresult("select querydata from  querymaster where id=3");
        qry = qry.replaceAll("stfedit", stfsearch);
        staffdetails = art.searchdata(qry);

    }

    @Action(value = "staffactionlist", results = {
        @Result(name = "contentlist", location = "/master/staffmasterlistcontent.jsp")
    })
    public String stafflistcontent() throws Exception {
        process = "nil";
        qry = art.getuniqueresult("select querydata from  querymaster where id=1");
        staffdetails = art.searchdata(qry);
        System.out.println("tarted.... _________________________________________________" + qry);
        return "contentlist";
    }

    public boolean savestaff() throws Exception {

        process = "stfsave";
        Staffmaster staf = new Staffmaster();
        String maxqry = "select 'SGC/001/'||LPAD(NVL(MAX(TO_NUMBER(SUBSTR(STAFFID,9))),0)+1,5,'0') FROM STAFFMASTER";
        String maxdtls = art.getuniqueresult(maxqry);

        System.out.println("Sex_____________" + stfsex);
        System.out.println("AMrried_____________" + stfmaritialstat);
        System.out.println("CCCCCCCCCCCCCCCCCCC                    _____________" + permstfcountry);

        char sx;
        char mar;
        if (stfsex.equals("Male")) {
            sx = 'M';
        } else {
            sx = 'F';
        }
        if (stfmaritialstat.equals("Single")) {
            mar = 'S';
        } else {
            mar = 'M';
        }

        char tut;
        if (stftut.equals("Y")) {
            tut = 'Y';
        } else {
            tut = 'N';
        }
        char mod;
        if (stfmodeofapp.equals("1")) {
            mod = 'P';
        } else if (stfmodeofapp.equals("2")) {
            mod = 'T';
        } else {
            mod = 'H';
        }
        char hodstf;
        if (stfhod.equals("true")) {
            hodstf = 'Y';
        } else {
            hodstf = 'N';
        }
        boolean status = false;
        //String staffid, String title, String firstname, String lastname, Character sex, 
        //String stafftype, Character empStatus, Character maritalStatus, String departmentid, String subDept, String desig, String bloodgroup, Date dateofbirth, Date dateofjoin, String qualification, String experiance, String guardian, String mobile, String resino, String email, String accountno, String bankid, String bankname, String pfno, String esino, String panno, Character active, String houseNoName, String post, String city, String distid, String stateid, String countryid, String pin, Character tutor, String teachexp, String nonteachexp, String age, Date confirmdate, Character approve, Character dutyRequired, Character punchingrequired, String uanNo, String careOf, String electionId, String uan, String aadharno, Blob image, Character resigned, Character verified, String referencestaffid, Character stipend, Character visiting, Character inchargeDept, String collegeid, String academicYear, String enteredby,  String lastModifiedBy, Date lastModifiedDate
        // String permHouseNoName, String permPost, String permCity, String permDistid, String permStateid, String permCountryid, String permEmail, String permPin
        
          
            String filePath = request.getSession().getServletContext().getRealPath("/").concat("userimages");

            System.out.println("Image Location:" + filePath);//see the server console for actual location  
            File fileToCreate = new File( this.stfphoto);
            byte[] imageData = new byte[(int) fileToCreate.length()];
            try {
                FileInputStream fileInputStream = new FileInputStream(fileToCreate);
                fileInputStream.read(imageData);
                fileInputStream.close();
            } catch (Exception e) {
                System.out.println("Catch Save EEEEErrrrrrrorrrrrrrrr ________" + e);
            }
        
        
       
        staf = new Staffmaster(maxdtls, title.trim(), stfname.trim(), stflastnam.trim(), sx, stfstftyp, mod, mar, stfdept.trim(), "", stfdesig, stfbloodgrp.trim(), new SimpleDateFormat("dd/MM/yyyy").parse(stfdob), new SimpleDateFormat("dd/MM/yyyy").parse(stfdoj), stfquali.trim(), stfexperi.trim(), stfguard.trim(), stfmobile.trim(), permstfmobile.trim(), stfemail.trim(), stfbankacc.trim(), stfifsc.trim(), stfbankname.trim(), stfpfno.trim(), stfesino.trim(), stfpanno.trim(), 'Y', stfhousenam.trim(), stfhousestreet.trim(), stfhousecity.trim(), stfdist.trim(), stfstate.trim(), stfcountry.trim(), stfpin.trim(), tut, stfexperi.trim(), stfnonteachexp.trim(), "", new SimpleDateFormat("dd/MM/yyyy").parse(stfconfirmdt), 'Y', 'N', 'Y', stfuanno.trim(), stfcareof.trim(), stfelection.trim(), stfuanno.trim(), stfadhar.trim(), imageData, 'N', 'Y', "", 'N', 'N', 'N', "101", "2016", "", "", null, stfcaste.trim(), stfcastnam.trim(), stfrelig.trim(), stfhadicap.trim(), permstfhousenam, permstfhousestreet, permstfhousecity, permstfdist, permstfstate, permstfcountry, permstfemail, permstfpin, hodstf);
        status = art.savemaster(staf);
        if (status) {

            return true;
        } else {
            return false;
        }

    }

    public void staffeditload() throws Exception {

        process = "edit";
        System.out.println("Edit Screen         >>>      _____________");
        qry = art.getuniqueresult("select querydata from  querymaster where id=2");

        qry = qry.replaceAll("stfedit", stfeditid);
        staffdetails = art.searchdata(qry);

//   
//Stafmaster myimage=(Stafmaster)session.get(Stafmaster.class, 1);
//   //System.out.println("byte avatar2..."+avatar2);
//byte[] staffimage = myimage.getImage();
//        try{
//            FileOutputStream fos = new FileOutputStream(staffimage); 
//            fos.write(staffimage);
//            fos.close();
//        }catch(Exception e){
//            e.printStackTrace();
//        }
      

    }

    public boolean staffedit() throws Exception {
        process = "stfupd";
        String curdateqry = "SELECT to_char(to_date(SYSDATE,'dd/mm/yy'),'dd/mm/yy') FROM DUAL";
        String curdate = art.getuniqueresult(curdateqry);
        System.out.println("UPD STATRTTTTTTTTT ))))))))))))))))$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$++       " + curdate);

        char sx;
        char mar;
        if (stfsex.equals("Male")) {
            sx = 'M';
        } else {
            sx = 'F';
        }
        if (stfmaritialstat.equals("Single")) {
            mar = 'S';
        } else {
            mar = 'M';
        }

        char tut;
        if (stftut.equals("Y")) {
            tut = 'Y';
        } else {
            tut = 'N';
        }
        String staffupdateqry = "update staffmaster set TITLE=trim('" + title + "'),FIRSTNAME=trim('" + stfname + "'),LASTNAME=trim('" + stflastnam + "'),SEX=trim('" + sx + "'),STAFFTYPE=trim('" + stfstftyp + "'),EMP_STATUS='P',MARITAL_STATUS=trim('" + mar + "'),DEPARTMENTID=trim('" + stfdept + "'),BLOODGROUP=trim('" + stfbloodgrp + "'),DATEOFBIRTH=to_date('" + stfdob + "','dd/mm/yyyy'),DATEOFJOIN=to_date('" + stfdoj + "','dd/mm/yyyy'),QUALIFICATION=trim('" + stfquali + "'),EXPERIANCE=trim('" + stfexperi + "'), GUARDIAN=trim('" + stfguard + "'),MOBILE=trim('" + stfmobile + "'),EMAIL=trim('" + stfemail + "'),ACCOUNTNO=trim('" + stfbankacc + "'),BANKID=trim('" + stfifsc + "'),BANKNAME=trim('" + stfbankname + "'),PFNO=trim('" + stfpfno + "'),ESINO=trim('" + stfesino + "'),PANNO=trim('" + stfpanno + "'), HOUSE_NO_NAME=trim('" + stfhousenam + "'),POST=trim('" + stfhousestreet + "'),CITY=trim('" + stfhousecity + "'),DISTID=trim('" + stfdist + "'),STATEID=trim('" + stfstate + "'),COUNTRYID=trim('" + stfcountry + "'), PIN=trim('" + stfpin + "'),TUTOR=trim('" + tut + "'), TEACHEXP=trim('" + stfexperi + "'),NONTEACHEXP=trim('" + stfnonteachexp + "'),CONFIRMDATE=to_date('" + stfconfirmdt + "','dd/mm/yyyy'),APPROVE='Y',UAN_NO=trim('" + stfuanno + "'),CARE_OF=trim('" + stfcareof + "'),ELECTION_ID=trim('" + stfelection + "'), UAN=trim('" + stfuanno + "'),AADHARNO=trim('" + stfadhar + "'),LAST_MODIFIED_DATE=to_date('" + curdate + "','dd/mm/yyyy') where staffid='" + stffid + "'";
        //String staffupdateqry = "update staffmaster set TITLE='" + title + "',FIRSTNAME='" + stfname + "',LASTNAME='" + stflastnam + "',SEX='" + sx + "',STAFFTYPE='" + stfstftyp + "',EMP_STATUS='P',MARITAL_STATUS='" + mar + "',DEPARTMENTID='" + stfdept + "',BLOODGROUP='" + stfbloodgrp + "',DATEOFBIRTH=to_date('" + stfdob + "','dd/mm/yyyy'),DATEOFJOIN=to_date('" + stfdoj + "','dd/mm/yyyy'),QUALIFICATION='" + stfquali + "',EXPERIANCE='" + stfexperi + "', GUARDIAN='" + stfguard + "',MOBILE='" + stfmobile + "',EMAIL='" + stfemail + "',ACCOUNTNO='" + stfbankacc + "',BANKID='" + stfifsc + "',BANKNAME='" + stfbankname + "',PFNO='" + stfpfno + "',ESINO='" + stfesino + "',PANNO='" + stfpanno + "', HOUSE_NO_NAME='" + stfhousenam + "',POST='" + stfhousestreet + "',CITY='" + stfhousecity + "',DISTID='" + stfdist + "',STATEID='" + stfstate + "',COUNTRYID='" + stfcountry + "', PIN='" + stfpin + "',TUTOR='" + tut + "', TEACHEXP='" + stfexperi + "',NONTEACHEXP='" + stfnonteachexp + "',CONFIRMDATE=to_date('" + stfconfirmdt + "','dd/mm/yyyy'),APPROVE='Y',UAN_NO='" + stfuanno + "',CARE_OF='" + stfcareof + "',ELECTION_ID='" + stfelection + "', UAN='" + stfuanno + "',AADHARNO='" + stfadhar + "',LAST_MODIFIED_DATE=to_date('" + curdate + "','dd/mm/yyyy') where staffid='" + stffid + "'";
        System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$++       " + staffupdateqry);
        updstff = art.update(staffupdateqry);
        if (updstff) {

            return true;
        }

        return true;

    }

    @Override
    public void validate() {
        if (process.equals("stfsave")) {
            if (title.equals("-1")) {
                addFieldError("title", "Mandatory...!!");
            }
            if (stfname.trim().length() == 0) {
                addFieldError("stfname", "Mandatory...!!");
            }
            if (stfdob.trim().length() == 0) {
                addFieldError("stfdob", "Mandatory...!!");
            }
            if (stfquali.trim().length() == 0) {
                addFieldError("stfquali", "Mandatory...!!");
            }
            if (stfexperi.trim().length() == 0) {
                addFieldError("stfexperi", "Mandatory...!!");
            }

            if (stfconfirmdt.trim().length() == 0) {
                addFieldError("stfconfirmdt", "Mandatory...!!");
            }
            if (stfnation.trim().length() == 0) {
                addFieldError("stfnation", "Mandatory...!!");
            }
            if (stfrelig.equals("-1")) {
                addFieldError("stfrelig", "Mandatory...!!");
            }
            if (stfcaste.equals("-1")) {
                addFieldError("stfcaste", "Mandatory...!!");
            }
            if (stfcastnam.trim().length() == 0) {
                addFieldError("stfcastnam", "Mandatory...!!");
            }
            if (stfdoj.trim().length() == 0) {
                addFieldError("stfdoj", "Mandatory...!!");
            }
            if (stfstftyp.trim().length() == 0) {
                addFieldError("stfstftyp", "Mandatory...!!");
            }
            if (stfdept.trim().length() == 0) {
                addFieldError("stfdept", "Mandatory...!!");
            }
            if (stfdesig.equals("-1")) {
                addFieldError("stfdesig", "Mandatory...!!");
            }
            if (stfhousenam.trim().length() == 0) {
                addFieldError("stfhousenam", "Mandatory...!!");
            }
            if (stfhousestreet.trim().length() == 0) {
                addFieldError("stfhousestreet", "Mandatory...!!");
            }
            if (stfhousecity.trim().length() == 0) {
                addFieldError("stfhousecity", "Mandatory...!!");
            }
            if (stfdist.equals("-1")) {
                addFieldError("stfdist", "Mandatory...!!");
            }
            if (stfstate.equals("-1")) {
                addFieldError("stfstate", "Mandatory...!!");
            }
            if (stfpin.trim().length() == 0) {
                addFieldError("stfpin", "Mandatory...!!");
            }
            if (stfmobile.trim().length() == 0) {
                addFieldError("stfmobile", "Mandatory...!!");
            }
//            if (stfbankname.trim().length() == 0) {
//                addFieldError("stfbankname", "Mandatory...!!");
//            }
//            if (stfbankacc.trim().length() == 0) {
//                addFieldError("stfbankacc", "Mandatory...!!");
//            }
//            if (stfifsc.trim().length() == 0) {
//                addFieldError("stfifsc", "Mandatory...!!");
//            }
//
//            if (stfadhar.trim().length() == 0) {
//                addFieldError("stfadhar", "Mandatory...!!");
//            }

        }
    }

    public String getStaffphoto() {
        return staffphoto;
    }

    public void setStaffphoto(String staffphoto) {
        this.staffphoto = staffphoto;
    }

    public String getStfphoto() {
        return stfphoto;
    }

    public void setStfphoto(String stfphoto) {
        this.stfphoto = stfphoto;
    }

    public LinkedHashMap<String, String> getDesiglist() {
        return desiglist;
    }

    public void setDesiglist(LinkedHashMap<String, String> desiglist) {
        this.desiglist = desiglist;
    }

    public LinkedHashMap<String, String> getDeplist() {
        return deplist;
    }

    public void setDeplist(LinkedHashMap<String, String> deplist) {
        this.deplist = deplist;
    }

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public LinkedHashMap<String, String> getQualilist() {
        return qualilist;
    }

    public void setQualilist(LinkedHashMap<String, String> qualilist) {
        this.qualilist = qualilist;
    }

    public LinkedHashMap<String, String> getDistlist() {
        return distlist;
    }

    public void setDistlist(LinkedHashMap<String, String> distlist) {
        this.distlist = distlist;
    }

    public LinkedHashMap<String, String> getCntrylist() {
        return cntrylist;
    }

    public void setCntrylist(LinkedHashMap<String, String> cntrylist) {
        this.cntrylist = cntrylist;
    }

    public LinkedHashMap<String, String> getStypelist() {
        return stypelist;
    }

    public void setStypelist(LinkedHashMap<String, String> stypelist) {
        this.stypelist = stypelist;
    }

    public String getStfsearch() {
        return stfsearch;
    }

    public void setStfsearch(String stfsearch) {
        this.stfsearch = stfsearch;
    }

    public LinkedHashMap<String, String> getBloodlist() {
        return bloodlist;
    }

    public void setBloodlist(LinkedHashMap<String, String> bloodlist) {
        this.bloodlist = bloodlist;
    }

    public LinkedHashMap<String, String> getCastelist() {
        return castelist;
    }

    public void setCastelist(LinkedHashMap<String, String> castelist) {
        this.castelist = castelist;
    }

    public LinkedHashMap<String, String> getReligionlist() {
        return religionlist;
    }

    public void setReligionlist(LinkedHashMap<String, String> religionlist) {
        this.religionlist = religionlist;
    }

    public LinkedHashMap<String, String> getStatelist() {
        return statelist;
    }

    public void setStatelist(LinkedHashMap<String, String> statelist) {
        this.statelist = statelist;
    }

    public String getStfeditid() {
        return stfeditid;
    }

    public void setStfeditid(String stfeditid) {
        this.stfeditid = stfeditid;
    }

    public List getStaffdetails() {
        return staffdetails;
    }

    public void setStaffdetails(List staffdetails) {
        this.staffdetails = staffdetails;
    }

    public String getStfnonteachexp() {
        return stfnonteachexp;
    }

    public void setStfnonteachexp(String stfnonteachexp) {
        this.stfnonteachexp = stfnonteachexp;
    }

    public String getStfconfirmdt() {
        return stfconfirmdt;
    }

    public void setStfconfirmdt(String stfconfirmdt) {
        this.stfconfirmdt = stfconfirmdt;
    }

    public String getStfcareof() {
        return stfcareof;
    }

    public void setStfcareof(String stfcareof) {
        this.stfcareof = stfcareof;
    }

    public String getStfuanno() {
        return stfuanno;
    }

    public void setStfuanno(String stfuanno) {
        this.stfuanno = stfuanno;
    }

    public String getStfelection() {
        return stfelection;
    }

    public void setStfelection(String stfelection) {
        this.stfelection = stfelection;
    }

    public String getStfadhar() {
        return stfadhar;
    }

    public void setStfadhar(String stfadhar) {
        this.stfadhar = stfadhar;
    }

    public String getEcho() {
        return echo;
    }

    public void setEcho(String echo) {
        this.echo = echo;
    }

    public String getStfexperi() {
        return stfexperi;
    }

    public void setStfexperi(String stfexperi) {
        this.stfexperi = stfexperi;
    }

    public String getStfbankname() {
        return stfbankname;
    }

    public void setStfbankname(String stfbankname) {
        this.stfbankname = stfbankname;
    }

    public String getStfbankacc() {
        return stfbankacc;
    }

    public void setStfbankacc(String stfbankacc) {
        this.stfbankacc = stfbankacc;
    }

    public String getStfifsc() {
        return stfifsc;
    }

    public void setStfifsc(String stfifsc) {
        this.stfifsc = stfifsc;
    }

    public String getStfpanno() {
        return stfpanno;
    }

    public void setStfpanno(String stfpanno) {
        this.stfpanno = stfpanno;
    }

    public String getStfpfno() {
        return stfpfno;
    }

    public void setStfpfno(String stfpfno) {
        this.stfpfno = stfpfno;
    }

    public String getStfesino() {
        return stfesino;
    }

    public void setStfesino(String stfesino) {
        this.stfesino = stfesino;
    }

    public String getProcess() {
        return process;
    }

    public void setProcess(String process) {
        this.process = process;
    }

    public String getStfname() {
        return stfname;
    }

    public void setStfname(String stfname) {
        this.stfname = stfname;
    }

    public String getStfdob() {
        return stfdob;
    }

    public void setStfdob(String stfdob) {
        this.stfdob = stfdob;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStflastnam() {
        return stflastnam;
    }

    public void setStflastnam(String stflastnam) {
        this.stflastnam = stflastnam;
    }

    public String getStfmaritialstat() {
        return stfmaritialstat;
    }

    public void setStfmaritialstat(String stfmaritialstat) {
        this.stfmaritialstat = stfmaritialstat;
    }

    public String getStfsex() {
        return stfsex;
    }

    public void setStfsex(String stfsex) {
        this.stfsex = stfsex;
    }

    public String getStfnation() {
        return stfnation;
    }

    public void setStfnation(String stfnation) {
        this.stfnation = stfnation;
    }

    public String getStfquali() {
        return stfquali;
    }

    public void setStfquali(String stfquali) {
        this.stfquali = stfquali;
    }

    public String getStfbloodgrp() {
        return stfbloodgrp;
    }

    public void setStfbloodgrp(String stfbloodgrp) {
        this.stfbloodgrp = stfbloodgrp;
    }

    public String getStfrelig() {
        return stfrelig;
    }

    public void setStfrelig(String stfrelig) {
        this.stfrelig = stfrelig;
    }

    public String getStfcaste() {
        return stfcaste;
    }

    public void setStfcaste(String stfcaste) {
        this.stfcaste = stfcaste;
    }

    public String getStfcastnam() {
        return stfcastnam;
    }

    public void setStfcastnam(String stfcastnam) {
        this.stfcastnam = stfcastnam;
    }

    public String getStfguard() {
        return stfguard;
    }

    public void setStfguard(String stfguard) {
        this.stfguard = stfguard;
    }

    public String getStfdoj() {
        return stfdoj;
    }

    public void setStfdoj(String stfdoj) {
        this.stfdoj = stfdoj;
    }

    public String getStfstftyp() {
        return stfstftyp;
    }

    public void setStfstftyp(String stfstftyp) {
        this.stfstftyp = stfstftyp;
    }

    public String getStffid() {
        return stffid;
    }

    public void setStffid(String stffid) {
        this.stffid = stffid;
    }

    public String getStfhadicap() {
        return stfhadicap;
    }

    public void setStfhadicap(String stfhadicap) {
        this.stfhadicap = stfhadicap;
    }

    public Boolean isStftut() {
        return stftut;
    }

    public void setStftut(Boolean stftut) {
        this.stftut = stftut;
    }

    public String getStfdesig() {
        return stfdesig;
    }

    public void setStfdesig(String stfdesig) {
        this.stfdesig = stfdesig;
    }

    public String getStfdept() {
        return stfdept;
    }

    public void setStfdept(String stfdept) {
        this.stfdept = stfdept;
    }

    public String getStfsubhandl() {
        return stfsubhandl;
    }

    public void setStfsubhandl(String stfsubhandl) {
        this.stfsubhandl = stfsubhandl;
    }

    public String getStfclshandl() {
        return stfclshandl;
    }

    public void setStfclshandl(String stfclshandl) {
        this.stfclshandl = stfclshandl;
    }

    public String getStfhousenam() {
        return stfhousenam;
    }

    public void setStfhousenam(String stfhousenam) {
        this.stfhousenam = stfhousenam;
    }

    public String getStfhousestreet() {
        return stfhousestreet;
    }

    public void setStfhousestreet(String stfhousestreet) {
        this.stfhousestreet = stfhousestreet;
    }

    public String getStfhousecity() {
        return stfhousecity;
    }

    public void setStfhousecity(String stfhousecity) {
        this.stfhousecity = stfhousecity;
    }

    public String getStfdist() {
        return stfdist;
    }

    public void setStfdist(String stfdist) {
        this.stfdist = stfdist;
    }

    public String getStfstate() {
        return stfstate;
    }

    public void setStfstate(String stfstate) {
        this.stfstate = stfstate;
    }

    public String getStfpin() {
        return stfpin;
    }

    public void setStfpin(String stfpin) {
        this.stfpin = stfpin;
    }

    public String getStfcountry() {
        return stfcountry;
    }

    public void setStfcountry(String stfcountry) {
        this.stfcountry = stfcountry;
    }

    public String getStfmobile() {
        return stfmobile;
    }

    public void setStfmobile(String stfmobile) {
        this.stfmobile = stfmobile;
    }

    public String getStfemail() {
        return stfemail;
    }

    public void setStfemail(String stfemail) {
        this.stfemail = stfemail;
    }

    public String getQry() {
        return qry;
    }

    public void setQry(String qry) {
        this.qry = qry;
    }

    public boolean isUpdstff() {
        return updstff;
    }

    public void setUpdstff(boolean updstff) {
        this.updstff = updstff;
    }

    public String getPermstfhousenam() {
        return permstfhousenam;
    }

    public void setPermstfhousenam(String permstfhousenam) {
        this.permstfhousenam = permstfhousenam;
    }

    public String getPermstfhousestreet() {
        return permstfhousestreet;
    }

    public void setPermstfhousestreet(String permstfhousestreet) {
        this.permstfhousestreet = permstfhousestreet;
    }

    public String getPermstfhousecity() {
        return permstfhousecity;
    }

    public void setPermstfhousecity(String permstfhousecity) {
        this.permstfhousecity = permstfhousecity;
    }

    public String getPermstfdist() {
        return permstfdist;
    }

    public void setPermstfdist(String permstfdist) {
        this.permstfdist = permstfdist;
    }

    public String getPermstfstate() {
        return permstfstate;
    }

    public void setPermstfstate(String permstfstate) {
        this.permstfstate = permstfstate;
    }

    public String getPermstfpin() {
        return permstfpin;
    }

    public void setPermstfpin(String permstfpin) {
        this.permstfpin = permstfpin;
    }

    public String getPermstfcountry() {
        return permstfcountry;
    }

    public void setPermstfcountry(String permstfcountry) {
        this.permstfcountry = permstfcountry;
    }

    public String getPermstfmobile() {
        return permstfmobile;
    }

    public void setPermstfmobile(String permstfmobile) {
        this.permstfmobile = permstfmobile;
    }

    public String getPermstfemail() {
        return permstfemail;
    }

    public void setPermstfemail(String permstfemail) {
        this.permstfemail = permstfemail;
    }

    public String getStfmodeofapp() {
        return stfmodeofapp;
    }

    public void setStfmodeofapp(String stfmodeofapp) {
        this.stfmodeofapp = stfmodeofapp;
    }

    public String getStfhod() {
        return stfhod;
    }

    public void setStfhod(String stfhod) {
        this.stfhod = stfhod;
    }

    public String getStfremarks() {
        return stfremarks;
    }

    public void setStfremarks(String stfremarks) {
        this.stfremarks = stfremarks;
    }

}
