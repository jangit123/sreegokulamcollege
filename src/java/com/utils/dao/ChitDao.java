/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.utils.dao;


import java.sql.Connection;
import java.util.ArrayList;
import static java.util.Collections.list;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

/**
 *
 * @author EDP
 */
public interface ChitDao {

    public List<String> login(String uname, String pass) throws Exception;



    public boolean savemaster(Object sm) throws Exception;

    public boolean save(List list) throws Exception;

    public boolean save(Object object, List list) throws Exception;


    public List<Object[]> search(String agentid) throws Exception;

    public List<Object[]> menulist( String role) throws Exception;

    public List<Object[]> submenulist(String role) throws Exception;

    public Map<String, String> combomaster(String col1, String col2, String col3) throws Exception;

    public LinkedHashMap<String, String> combomaster(String col) throws Exception;

    public Map<String, String> combomaster1(String col) throws Exception;

    public LinkedHashMap<String, String> querymaster(String col) throws Exception;

   


    public boolean savemasterlist(List sm) throws Exception;

    public String maxval() throws Exception;

    //public boolean update(Object ob) throws Exception;
    public boolean updatemore(List updlist) throws Exception;

    public String getmultiresult(String qry) throws Exception;

    public List<Object[]> search(String col1, String col2, String col3) throws Exception;

    public boolean save(String qry);

    public List fetchData(String query);

    public boolean update(String string);

    public List<String> searchdata(String qry) throws Exception;

    public String searchitem(String qry) throws Exception;

    public String getuniqueresult(String qry) throws Exception;

    public boolean delete(String delqry);

    public TreeMap<String, Integer> treemaplist(String col) throws Exception;
}
