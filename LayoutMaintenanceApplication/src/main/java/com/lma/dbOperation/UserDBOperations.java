package com.lma.dbOperation;

import com.lma.dao.UserDAO;
import com.sun.source.tree.Tree;

import sun.jvm.hotspot.debugger.ReadResult;

public class UserDBOperations implements UserDAO {

    public boolean addUser(User user) {
        return true;
    }

    public boolean updateUser(User user) {
        return true;
    }

    public boolean deleteUser(User user) {
        return true;
    }

    public boolean login() {
        try {
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }
}
