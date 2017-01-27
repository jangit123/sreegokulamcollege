package com.utils.map;
// Generated 30 Dec, 2016 1:24:09 PM by Hibernate Tools 3.6.0


import java.util.Date;

/**
 * Studentmaster generated by hbm2java
 */
public class Studentmaster  implements java.io.Serializable {


     private String id;
     private String collegeid;
     private String admissionNo;
     private Date doa;
     private String academicyear;
     private String admissiontocourse;
     private String name;
     private String sex;
     private Date dob;
     private String nationality;
     private String religion;
     private String caste;
     private String bloodgroup;
     private String FName;
     private String MName;
     private Short FEducation;
     private Short MEducation;
     private String FOccupation;
     private String FOphone;
     private String MOaddress;
     private String MOphone;
     private String familyIncome;
     private String address;
     private String city;
     private String state;
     private String country;
     private String zip;
     private String telNo;
     private String mobileNo;
     private String EMail;
     private String remarks;
     private String mothertongue;
     private String secondlanguage;
     private String prevSchDet;
     private String prevSchoolAddr;
     private String prevClass;
     private String prevBoard;
     private String enteredby;
     private Date entereddt;

    public Studentmaster() {
    }

	
    public Studentmaster(String id) {
        this.id = id;
    }
    public Studentmaster(String id, String collegeid, String admissionNo, Date doa, String academicyear, String admissiontocourse, String name, String sex, Date dob, String nationality, String religion, String caste, String bloodgroup, String FName, String MName, Short FEducation, Short MEducation, String FOccupation, String FOphone, String MOaddress, String MOphone, String familyIncome, String address, String city, String state, String country, String zip, String telNo, String mobileNo, String EMail, String remarks, String mothertongue, String secondlanguage, String prevSchDet, String prevSchoolAddr, String prevClass, String prevBoard, String enteredby, Date entereddt) {
       this.id = id;
       this.collegeid = collegeid;
       this.admissionNo = admissionNo;
       this.doa = doa;
       this.academicyear = academicyear;
       this.admissiontocourse = admissiontocourse;
       this.name = name;
       this.sex = sex;
       this.dob = dob;
       this.nationality = nationality;
       this.religion = religion;
       this.caste = caste;
       this.bloodgroup = bloodgroup;
       this.FName = FName;
       this.MName = MName;
       this.FEducation = FEducation;
       this.MEducation = MEducation;
       this.FOccupation = FOccupation;
       this.FOphone = FOphone;
       this.MOaddress = MOaddress;
       this.MOphone = MOphone;
       this.familyIncome = familyIncome;
       this.address = address;
       this.city = city;
       this.state = state;
       this.country = country;
       this.zip = zip;
       this.telNo = telNo;
       this.mobileNo = mobileNo;
       this.EMail = EMail;
       this.remarks = remarks;
       this.mothertongue = mothertongue;
       this.secondlanguage = secondlanguage;
       this.prevSchDet = prevSchDet;
       this.prevSchoolAddr = prevSchoolAddr;
       this.prevClass = prevClass;
       this.prevBoard = prevBoard;
       this.enteredby = enteredby;
       this.entereddt = entereddt;
    }
   
    public String getId() {
        return this.id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    public String getCollegeid() {
        return this.collegeid;
    }
    
    public void setCollegeid(String collegeid) {
        this.collegeid = collegeid;
    }
    public String getAdmissionNo() {
        return this.admissionNo;
    }
    
    public void setAdmissionNo(String admissionNo) {
        this.admissionNo = admissionNo;
    }
    public Date getDoa() {
        return this.doa;
    }
    
    public void setDoa(Date doa) {
        this.doa = doa;
    }
    public String getAcademicyear() {
        return this.academicyear;
    }
    
    public void setAcademicyear(String academicyear) {
        this.academicyear = academicyear;
    }
    public String getAdmissiontocourse() {
        return this.admissiontocourse;
    }
    
    public void setAdmissiontocourse(String admissiontocourse) {
        this.admissiontocourse = admissiontocourse;
    }
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    public String getSex() {
        return this.sex;
    }
    
    public void setSex(String sex) {
        this.sex = sex;
    }
    public Date getDob() {
        return this.dob;
    }
    
    public void setDob(Date dob) {
        this.dob = dob;
    }
    public String getNationality() {
        return this.nationality;
    }
    
    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
    public String getReligion() {
        return this.religion;
    }
    
    public void setReligion(String religion) {
        this.religion = religion;
    }
    public String getCaste() {
        return this.caste;
    }
    
    public void setCaste(String caste) {
        this.caste = caste;
    }
    public String getBloodgroup() {
        return this.bloodgroup;
    }
    
    public void setBloodgroup(String bloodgroup) {
        this.bloodgroup = bloodgroup;
    }
    public String getFName() {
        return this.FName;
    }
    
    public void setFName(String FName) {
        this.FName = FName;
    }
    public String getMName() {
        return this.MName;
    }
    
    public void setMName(String MName) {
        this.MName = MName;
    }
    public Short getFEducation() {
        return this.FEducation;
    }
    
    public void setFEducation(Short FEducation) {
        this.FEducation = FEducation;
    }
    public Short getMEducation() {
        return this.MEducation;
    }
    
    public void setMEducation(Short MEducation) {
        this.MEducation = MEducation;
    }
    public String getFOccupation() {
        return this.FOccupation;
    }
    
    public void setFOccupation(String FOccupation) {
        this.FOccupation = FOccupation;
    }
    public String getFOphone() {
        return this.FOphone;
    }
    
    public void setFOphone(String FOphone) {
        this.FOphone = FOphone;
    }
    public String getMOaddress() {
        return this.MOaddress;
    }
    
    public void setMOaddress(String MOaddress) {
        this.MOaddress = MOaddress;
    }
    public String getMOphone() {
        return this.MOphone;
    }
    
    public void setMOphone(String MOphone) {
        this.MOphone = MOphone;
    }
    public String getFamilyIncome() {
        return this.familyIncome;
    }
    
    public void setFamilyIncome(String familyIncome) {
        this.familyIncome = familyIncome;
    }
    public String getAddress() {
        return this.address;
    }
    
    public void setAddress(String address) {
        this.address = address;
    }
    public String getCity() {
        return this.city;
    }
    
    public void setCity(String city) {
        this.city = city;
    }
    public String getState() {
        return this.state;
    }
    
    public void setState(String state) {
        this.state = state;
    }
    public String getCountry() {
        return this.country;
    }
    
    public void setCountry(String country) {
        this.country = country;
    }
    public String getZip() {
        return this.zip;
    }
    
    public void setZip(String zip) {
        this.zip = zip;
    }
    public String getTelNo() {
        return this.telNo;
    }
    
    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }
    public String getMobileNo() {
        return this.mobileNo;
    }
    
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }
    public String getEMail() {
        return this.EMail;
    }
    
    public void setEMail(String EMail) {
        this.EMail = EMail;
    }
    public String getRemarks() {
        return this.remarks;
    }
    
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
    public String getMothertongue() {
        return this.mothertongue;
    }
    
    public void setMothertongue(String mothertongue) {
        this.mothertongue = mothertongue;
    }
    public String getSecondlanguage() {
        return this.secondlanguage;
    }
    
    public void setSecondlanguage(String secondlanguage) {
        this.secondlanguage = secondlanguage;
    }
    public String getPrevSchDet() {
        return this.prevSchDet;
    }
    
    public void setPrevSchDet(String prevSchDet) {
        this.prevSchDet = prevSchDet;
    }
    public String getPrevSchoolAddr() {
        return this.prevSchoolAddr;
    }
    
    public void setPrevSchoolAddr(String prevSchoolAddr) {
        this.prevSchoolAddr = prevSchoolAddr;
    }
    public String getPrevClass() {
        return this.prevClass;
    }
    
    public void setPrevClass(String prevClass) {
        this.prevClass = prevClass;
    }
    public String getPrevBoard() {
        return this.prevBoard;
    }
    
    public void setPrevBoard(String prevBoard) {
        this.prevBoard = prevBoard;
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


