package com.example.rest_api_assignment.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.rest_api_assignment.entities.Gender;
import com.example.rest_api_assignment.entities.Student;
import com.example.rest_api_assignment.repository.StudentRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    @Autowired
    StudentRepository studRepo;

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return studRepo.findAll();
    }

    @GetMapping("/students/{regNo}")
    public List<Student> getStudentByRegNo(@PathVariable int regNo) {
        return studRepo.findByRegNo(regNo);
    }

    @PostMapping("/students")
    public String addStudent(@RequestBody Student s) {
        if (studRepo.existsByRegNo(s.getRegNo())) {
            return "Student already exists ";
        }
        studRepo.save(s);
        return "Successfully added the student!!";
    }

    @PutMapping("/students/{regNo}")
    public String updateStudentRecord(@PathVariable int regNo, @RequestBody Student s) {
        if (!studRepo.existsByRegNo(s.getRegNo())) {
            return "Student with " + s.getRegNo() + " does not exists ";
        }
        studRepo.save(s);
        return "Successfully Updated the student record";
    }

    @PatchMapping("/students/{regNo}")
    public String updateStudent(@PathVariable int regNo, @RequestBody Student s) {
        if (!studRepo.existsByRegNo(s.getRegNo())) {
            return "Student with " + s.getRegNo() + " does not exists ";
        }
        studRepo.save(s);
        return "Successfully Updated the student record";
    }

    @DeleteMapping("/students/{regNo}")
public String deleteStudent(@PathVariable int regNo) {

    if (!studRepo.existsById(regNo)) {
        return "Student not found";
    }

    studRepo.deleteById(regNo);

    return "Deleted successfully";
}

    @GetMapping("/students/school")
    public List<Student> getStudentsBySchool(@RequestParam("name") String school) {
        return studRepo.findBySchool(school);
    }

    @GetMapping("/students/school/count")
    public int getStudentsCountBySchool(@RequestParam("name") String school) {
        return studRepo.findBySchool(school).size();
    }

    @GetMapping("/students/school/standard/count")
    public int getStudentsCountByStandard(@RequestParam("class") int standard) {
        return studRepo.findByStandard(standard).size();
    }

    @GetMapping("/students/result")
    public List<Student> getStudentsByPercentageSorted(@RequestParam boolean pass) {
        List<Student> allStudentsList = studRepo.findAll().stream().sorted((s1,s2) -> Float.compare(s2.getPercentage(),s1.getPercentage())).toList();
        if (pass == true) {
            return allStudentsList.stream().filter(s->s.getPercentage() > 40.0).toList();
        }else{
            return allStudentsList.stream().filter(s->s.getPercentage() < 40.0).toList();
        }
    }

    @GetMapping("/students/strength")
    public int getStudentsCountByStandard(@RequestParam int standard, @RequestParam Gender gender) {
        List<Student> list = studRepo.findByGenderAndStandard(gender,standard);
        return list.size();
    }

}
