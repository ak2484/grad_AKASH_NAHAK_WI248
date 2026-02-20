package com.example.spring_web_page_assignment.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.spring_web_page_assignment.service.StudentService;

@Controller
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping("/")
    public String showForm() {
        return "student";
    }

    @PostMapping("/insert")
    public String insertStudent(
            @RequestParam Integer rollNo,
            @RequestParam String name,
            @RequestParam String standard,
            @RequestParam String school,
            Model model) {

        service.saveStudent(name, standard, school, rollNo);
        model.addAttribute("message", "Student saved in BOTH databases!");
        return "student";
    }
}
