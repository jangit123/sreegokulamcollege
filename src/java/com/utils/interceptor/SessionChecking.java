package com.utils.interceptor;

import java.util.Map;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.ActionProxy;
import com.opensymphony.xwork2.ValidationAware;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class SessionChecking extends AbstractInterceptor {

    private static final String USER_KEY = "user";

    @Override
    public String intercept(ActionInvocation invocation) throws Exception {
        ActionProxy proxy = invocation.getProxy();
        Map results = proxy.getConfig().getResults();
        Map session = invocation.getInvocationContext().getSession();
        System.out.println("hiii.................FIRST.............");
        if (session.get(USER_KEY) == null) {
            System.out.println("hiii.................AFTER.............");
            //addActionError(invocation, "Your session has expired.");
            return "invalidsession";
        } else {

            return invocation.invoke();
        }

    }

   
}
