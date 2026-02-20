package com.example.spring_web_page_assignment.service;

import org.springframework.stereotype.Service;

import com.example.spring_web_page_assignment.models.Student;
import com.example.spring_web_page_assignment.repository.h2.StudentH2Repository;
import com.example.spring_web_page_assignment.repository.postgres.StudentPostgresRepository;

@Service
public class StudentService {

    private final StudentH2Repository h2Repo;
    private final StudentPostgresRepository pgRepo;

    public StudentService(StudentH2Repository h2Repo,
            StudentPostgresRepository pgRepo) {
        this.h2Repo = h2Repo;
        this.pgRepo = pgRepo;
    }

    public void saveStudent(String name, String standard, String school, Integer rollNo) {

        // Save to H2
        Student s1 = new Student();
        s1.setRollNo(rollNo);
        s1.setName(name);
        s1.setStandard(standard);
        s1.setSchool(school);
        h2Repo.save(s1);

        // Save to PostgreSQL
        Student s2 = new Student();
        s2.setRollNo(rollNo);
        s2.setName(name);
        s2.setStandard(standard);
        s2.setSchool(school);
        pgRepo.save(s2);
    }
}
