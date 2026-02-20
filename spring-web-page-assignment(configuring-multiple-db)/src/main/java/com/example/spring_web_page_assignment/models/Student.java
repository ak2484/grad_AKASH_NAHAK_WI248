package com.example.spring_web_page_assignment.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @Column(name = "rollno")
    private Integer rollNo;
    private String name;
    private String standard;
    private String school;

    @Override
    public String toString() {
        return "Student{"
                + "rollNo=" + rollNo
                + ", name='" + name + '\''
                + ", standard='" + standard + '\''
                + ", school='" + school + '\''
                + '}';
    }

    public Integer getRollNo() {
        return rollNo;
    }

    public void setRollNo(Integer rollNo) {
        this.rollNo = rollNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStandard() {
        return standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }
}
