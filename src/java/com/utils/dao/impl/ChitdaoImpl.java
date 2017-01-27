/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.utils.dao.impl;

import com.utils.dao.ChitDao;

import com.utils.session.HBSession;
import java.math.BigDecimal;
import java.sql.Connection;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.apache.struts2.ServletActionContext;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author EDP
 */
public class ChitdaoImpl implements ChitDao {

    private Map<String, String> resultlist;
    private LinkedHashMap<String, String> resultlistnew;
    private boolean status;

    public boolean save(Object object, List list) throws Exception {
        boolean flag = false;
        Session session = HBSession.getSessionFactory().openSession();
        try {
            session.beginTransaction();
            session.persist(object);
            int i = 0;
            for (Object element : list) {
                if (element != null) {
                    session.save(element);
                }
                if (i == (list.size() / 2)) {
                    session.flush();
                    session.clear();
                }
                i++;
            }
            session.getTransaction().commit();
            flag = true;
        } catch (Exception e) {
            e.printStackTrace();
            flag = false;
            session.getTransaction().rollback();
        }
        session.close();
        return flag;
    }

    public boolean save(List list) throws Exception {
        boolean flag = false;
        Session session = HBSession.getSessionFactory().openSession();
        try {
            session.beginTransaction();
            int i = 0;
            for (Object element : list) {
                if (element != null) {
                    session.save(element);
                }
                if (i == (list.size() / 2)) {
                    session.flush();
                    session.clear();
                }
                i++;
            }
            session.getTransaction().commit();
            flag = true;
        } catch (Exception e) {
            e.printStackTrace();
            flag = false;
            session.getTransaction().rollback();
        }
        session.close();
        return flag;
    }

    public List fetchData(String searchquery) {
        List data;
        Session session = HBSession.getSessionFactory().openSession();
        try {

            session.beginTransaction();
            SQLQuery query = session.createSQLQuery(searchquery);
            //session.close();
            data = query.list();

        } catch (HibernateException e) {
            e.printStackTrace();
            //session.close();
            throw e;
        }
        session.close();
        return data;
    }

    @Override
    public List<String> login(String uname, String pass) throws Exception {
        // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        boolean status = false;
        List<String> list = null;
        Session session = HBSession.getSessionFactory().openSession();
        System.out.println("session" + session);
        try {
            session.beginTransaction();
            Query q = session.createSQLQuery("select * from Usermaster"
                    + "  where upper(username)='" + uname.toUpperCase() + "' and upper(password)='" + pass.toUpperCase() + "'");

            // q.setParameter("user", uname.toUpperCase());
            // q.setParameter("pwd", pass.toUpperCase());
            // q.executeUpdate();
            list = q.list();

        } catch (HibernateException e) {
            System.out.println("eeee" + e);

        }
        session.close();
        return list;

    }

    public boolean save(String qry) {
//Hpettycash voucher = null;
        System.out.println("hempid.....>>>>>>>" + qry);
        Session session = HBSession.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        try {
            transaction.begin();
            Query query = session.createSQLQuery(qry);

            int save = query.executeUpdate();
            System.out.println("QR1111111111111111111" + qry);
            System.out.println("updatedddd" + save);
            transaction.commit();
            session.close();
            return true;

        } catch (Exception e) {

            e.printStackTrace();
            return false;
        }

    }

    @Override
    public String getuniqueresult(String qry) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        session.beginTransaction();
        Query query = session.createSQLQuery(qry);
        String result = query.uniqueResult().toString();
        if (result == null) {
            result = "";
        }
        session.close();
        return result;
    }

    @Override
    public String getmultiresult(String qry) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        session.beginTransaction();
        Query query = session.createSQLQuery(qry);
        System.out.println("qry..." + qry);
        String result = "";
        List<String> rows = query.list();
        for (String row : rows) {
            System.out.println("row" + row);
            result = result + ".." + row;
            System.out.println("result" + result);
        }
        if (result == null) {
            result = "";
        }
        session.close();
        return result;
    }

    @Override
    public String searchitem(String qry) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();

        List list = null;
        String searchitem = "";
        try {

            session.beginTransaction();

            Query query = session.createSQLQuery(qry);
            System.out.println("qry>>>>>" + qry);
            list = query.list();
            if (list != null && list.size() > 0) {
                searchitem = (String) list.get(0);
            }
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return searchitem;
    }

    @Override
    public boolean savemaster(Object sm) throws Exception {
        boolean stat = false;
        Session session = HBSession.getSessionFactory().openSession();
        Transaction tns = session.beginTransaction();
        try {
            tns = session.beginTransaction();
            session.save(sm);
            tns.commit();
            stat = true;
        } catch (HibernateException h) {
            tns.rollback();
            stat = false;
            System.out.println("h" + h);
        }
        session.close();
        return stat;

    }

    @Override
    public List<String> searchdata(String col) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        String qry = "";
        List<String> list = null;
        try {
            System.out.println("col1>>>>>>>>>>>>>>>>>>>>>>>");
            session.beginTransaction();
            //if (col3.equals("001"))
            // qry="select voucherno, payeename, amount, tds, total, narrationUS, HEMPMONTHBUS, HEMPAGENT, HAGENTID, HEMPQUAL, HEMPMARRIED, HEMPDEPEND, HPREADDR1, HPREADDR2, HPREAREA, HPRECITY, HPREPIN, HPREPHONE, HPERADDR1, HPERADDR2, HPERAREA, HPERCITY, HPERPIN, HPERPHONE, HEMAILID, PAN_NO, GIR_NO, IT_WARD_PLACE, HREFNAME1, HREFADDR1, HREFNAME2, HREFADDR2, HEMPIDENT, HSECDEP, PFAPPLN_SENT_DT, HEMP_STATUS, ESI_POLICY_NO, ESI_DISPENSARY, SUPERANNDT, REMARKS, SALARY, QUOTAAMT, GENDER, OFFICESTAFF, PENS_FLAG, ERPF_FLAG, RES_FLAG, ACTIVE, DEPARTMENT_ID, DESID, BIRTHDTBK, ITFLAG, AUTHEN, KHPFNUMBER, ENTBY, PFNODT, ALLOW, ALLOWDT, ALLOWDATE, AGENT from hemployeemast@salary where hempid='"+col1+"'";
            //else
            //qry="select voucherno, payeename, amt, tds, total, narration,glcode from hpettycash where BRAPPROVE = 'N' AND  paiddate>=to_date('"+col1+"','dd/mm/yyyy') and paiddate<=to_date('"+col2+"','dd/mm/yyyy') and hbrnid='"+col3+"'";   
            Query query = session.createSQLQuery(col);
            System.out.println("qry>>>>>>>>>>>>>>>>>>" + qry);
            list = query.list();
            System.out.println("SIZE>>>>>" + list.size());
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return list;
    }

    @Override
    public boolean updatemore(List updlist) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        Transaction tran = session.beginTransaction();

        try {
            for (Object e : updlist) {
                tran = session.beginTransaction();
                session.update(e);
                tran.commit();
                status = true;
                System.out.println("TRUE");
            }
        } catch (HibernateException euuuuuoiuyt) {
            System.out.println("error" + euuuuuoiuyt);
            tran.rollback();
            status = false;
        }
        session.close();
        return status;
    }

    public boolean delete(String qry) {
//Hpettycash voucher = null;
        System.out.println("hempid.....>>>>>>>" + qry);
        Session session = HBSession.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        try {
            transaction.begin();
            Query query = session.createSQLQuery(qry);

            int update = query.executeUpdate();
            System.out.println("QR1111111111111111111" + qry);
            System.out.println("updatedddd" + update);
            transaction.commit();
            session.close();
            return true;

        } catch (Exception e) {

            e.printStackTrace();
            session.close();
            return false;
        }

    }

    @Override
    public boolean savemasterlist(List sm) throws Exception {
        boolean stat = false;
        Session atss = HBSession.getSessionFactory().openSession();
        Transaction attr = atss.beginTransaction();
        try {

            for (Object e : sm) {
                attr = atss.beginTransaction();
                atss.save(e);
                stat = true;
                attr.commit();
            }
        } catch (HibernateException err) {
            attr.rollback();
            stat = false;
            System.out.println("errrro" + err);
        }
        atss.close();
        return stat;
    }

    @Override
    public List<Object[]> menulist(String role) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        String qry = "";
        List<Object[]> list = null;
        try {

            session.beginTransaction();
            qry = "SELECT ID,initcap(MENU) FROM MENUMASTER WHERE   ID IN "
                    + "(SELECT DISTINCT MENU_ID FROM USER_ROLE_PREVILEGE WHERE ROLE_ID='" + role + "') ORDER BY to_number(MENUORDER)";

            Query query = session.createSQLQuery(qry);
            System.out.println("qry>>>>>" + qry);
            list = query.list();
            System.out.println("SIZE>>>>>" + list.size());
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return list;
    }

    @Override
    public List<Object[]> submenulist(String role) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        String qry = "";
        List<Object[]> list = null;
        try {
            System.out.println("role>>>>>" + role);
            session.beginTransaction();
            // qry="select MENU,INITCAP(SUBMENU),PAGELINK from user_submenumast_ho where  active='Y' "
            //    + "and menu in ( select ID from user_menumast_ho where usertype='"+menutype+"')"
            //    + "  order by to_number(menuorder)";
            qry = "select b.menu_id,initcap(submenu),a.pagelink,a.status from submenumaster a,user_role_previlege b where "
                    + "b.ROLE_ID='" + role + "' and b.active in ('Y','N') and   a.MENUID=b.MENU_ID  "
                    + "and a.ID=b.SUBMENU_ID order by to_number(b.menu_id),to_number(a.menuorder)";

            Query query = session.createSQLQuery(qry);
            System.out.println("qry>>>>>" + qry);
            list = query.list();
            System.out.println("SIZE>>>>>" + list.size());
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return list;
    }

    @Override
    public List<Object[]> search(String col1, String col2, String col3) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        String qry = "";
        List<Object[]> list = null;
        try {
            System.out.println("col1>>>>>>>>>>>>>>>>>>>>>>>");
            session.beginTransaction();
            //if (col3.equals("001"))
            // qry="select voucherno, payeename, amount, tds, total, narrationUS, HEMPMONTHBUS, HEMPAGENT, HAGENTID, HEMPQUAL, HEMPMARRIED, HEMPDEPEND, HPREADDR1, HPREADDR2, HPREAREA, HPRECITY, HPREPIN, HPREPHONE, HPERADDR1, HPERADDR2, HPERAREA, HPERCITY, HPERPIN, HPERPHONE, HEMAILID, PAN_NO, GIR_NO, IT_WARD_PLACE, HREFNAME1, HREFADDR1, HREFNAME2, HREFADDR2, HEMPIDENT, HSECDEP, PFAPPLN_SENT_DT, HEMP_STATUS, ESI_POLICY_NO, ESI_DISPENSARY, SUPERANNDT, REMARKS, SALARY, QUOTAAMT, GENDER, OFFICESTAFF, PENS_FLAG, ERPF_FLAG, RES_FLAG, ACTIVE, DEPARTMENT_ID, DESID, BIRTHDTBK, ITFLAG, AUTHEN, KHPFNUMBER, ENTBY, PFNODT, ALLOW, ALLOWDT, ALLOWDATE, AGENT from hemployeemast@salary where hempid='"+col1+"'";
            //else
            //qry="select voucherno, payeename, amt, tds, total, narration,glcode from hpettycash where BRAPPROVE = 'N' AND  paiddate>=to_date('"+col1+"','dd/mm/yyyy') and paiddate<=to_date('"+col2+"','dd/mm/yyyy') and hbrnid='"+col3+"'";   
            Query query = session.createSQLQuery(qry);
            System.out.println("qry>>>>>>>>>>>>>>>>>>" + qry);
            list = query.list();
            System.out.println("SIZE>>>>>" + list.size());
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return list;
    }

    @Override
    public List<Object[]> search(String qry) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();

        List<Object[]> list = null;
        try {

            session.beginTransaction();

            Query query = session.createSQLQuery(qry);
            System.out.println("qry>>>>>" + qry);
            list = query.list();
            System.out.println("SIZE>>>>>" + list.size());
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return list;
    }

    public boolean update(String qry) {
//Hpettycash voucher = null;

        Session session = HBSession.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        try {
            transaction.begin();
            Query query = session.createSQLQuery(qry);

            int update = query.executeUpdate();
            System.out.println("QR1111111111111111111" + qry);
            System.out.println("updatedddd" + update);
            transaction.commit();
            session.close();
            return true;

        } catch (Exception e) {

            e.printStackTrace();
            session.close();
            return false;
        }

    }

    @Override
    public Map<String, String> combomaster(String col1, String col2, String col3) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        try {
            session.beginTransaction();
            String qry = "select " + col1 + "," + col2 + " from " + col3 + " order by " + col1 + "";
            Query query = session.createSQLQuery(qry);
            System.out.println("query" + qry);
            resultlist = new HashMap<String, String>();
            List<Object[]> rows = query.list();
            for (Object[] row : rows) {
                resultlist.put((String) row[0], (String) row[1]);
            }
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return resultlist;
    }

    @Override
    public LinkedHashMap<String, String> combomaster(String col) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        try {
            session.beginTransaction();
            // 
            Query query = session.createSQLQuery(col);
            System.out.println("query...>" + col);
            resultlistnew = new LinkedHashMap<String, String>();
            List<Object[]> rows = query.list();
            for (Object[] row : rows) {
                resultlistnew.put((String) row[2], (String) row[0] + "-" + (String) row[2] + "-" + (String) row[69]);
            }
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return resultlistnew;
    }

    @Override
    public LinkedHashMap<String, String> querymaster(String col) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        LinkedHashMap<String, String> myresultlist = new LinkedHashMap<String, String>();
        try {
            session.beginTransaction();
            // 
            Query query = session.createSQLQuery(col);
            System.out.println("query" + col);
            myresultlist = new LinkedHashMap<String, String>();
            List<Object[]> rows = query.list();
            for (Object[] row : rows) {
                myresultlist.put((String) row[0], (String) row[1]);
            }
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return myresultlist;
    }

    @Override
    public TreeMap<String, Integer> treemaplist(String col) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        TreeMap<String, Integer> myresultlist = new TreeMap<String, Integer>();
        try {
            session.beginTransaction();
            // 
            Query query = session.createSQLQuery(col);
            System.out.println("query" + col);
            myresultlist = new TreeMap<String, Integer>();
            List<Object[]> rows = query.list();
            for (Object[] row : rows) {
                Integer grandChildCount = ((BigDecimal) row[1]).intValue();
                myresultlist.put((String) row[0], grandChildCount);
                System.out.println("grandChildCount" + grandChildCount);
            }
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return myresultlist;
    }

    @Override
    public Map<String, String> combomaster1(String col) throws Exception {
        Session session = HBSession.getSessionFactory().openSession();
        try {
            session.beginTransaction();
            // 
            Query query = session.createSQLQuery(col);
            System.out.println("query" + col);
            resultlist = new HashMap<String, String>();
            List<Object[]> rows = query.list();
            for (Object[] row : rows) {
                resultlist.put((String) row[2], (String) row[0]);
            }
        } catch (HibernateException e) {

            session.getTransaction().rollback();
        }
        session.close();
        return resultlist;
    }

    @Override
    public String maxval() throws Exception {
        List maxqry;
        String voucherno = new String();
        Session s = HBSession.getSessionFactory().openSession();
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpSession session = request.getSession();
        String vou = (String) session.getAttribute("loginuser");
        System.out.println("vani" + vou);

        String hbrname = vou.substring(3, 6);
        System.out.println("vgfggtfghghghhhhhhhhhhhhhhhhhhhhvvvvvv" + hbrname);
        String vouqry = "select UPPER('" + hbrname + "')||'/'||GETFINYEAR()||'/'||to_char((nvl(max(to_number(substr(voucherno,13))),0)+1))voucherno from hpettycash";
        System.out.println("hhhhhhhhhhhhhhhhhhh" + vouqry);
        try {
            s.beginTransaction();
            Query query = s.createSQLQuery(vouqry);
            maxqry = query.list();
            voucherno = (String) maxqry.get(0);
            s.close();
            return voucherno;
        } catch (HibernateException ex) {
            System.out.println("eeeeeeee" + ex);
            s.close();
            return voucherno;
        }
    }

}
