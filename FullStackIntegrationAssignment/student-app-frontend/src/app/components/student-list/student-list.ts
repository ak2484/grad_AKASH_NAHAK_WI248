import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.students = data;
    });
  }
}
