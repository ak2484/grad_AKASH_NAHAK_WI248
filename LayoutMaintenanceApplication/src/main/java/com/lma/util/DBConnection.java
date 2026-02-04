package com.lma.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {

    private static Connection con = null;

    private DBConnection() {

    }

    public static Connection getConnection() throws SQLException {
        if (con == null) {
            // Class.forName("");

            con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/lma", "postgres", "123@Akash");

            return con;
        }
        return con;
    }
}
