package com.example.rest_api_assignment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest_api_assignment.entities.Gender;
import com.example.rest_api_assignment.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

    public String findByRegNo(int regNo);

    public String deleteByRegNo(int regNo);

    public List<Student> findBySchool(String school);
    
    public List<Student> findByStandard(int standard);

    public List<Student> findByPercentage(int percentage);

    public boolean existsByRegNo(int regNo);

    @Query("from Student where gender=?1 AND standard =?2")
    public List<Student> findByGenderAndStandard(Gender gender, int standard);
}
