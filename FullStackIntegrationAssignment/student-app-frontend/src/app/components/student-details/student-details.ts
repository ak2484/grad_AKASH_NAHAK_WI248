import { ChangeDetectorRef, Component } from '@angular/core';
import { Student } from '../../models/Students';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    console.log('Admin page opened');
    this.loadStudents();
    // this.cdr.detectChanges();
  }
  loadStudents() {
    this.studentService.getAllStudents().subscribe({
      next: (data: Student[]) => {
        this.students = [...data];
        console.log(data);
        this.cdr.detectChanges(); // trigger change detection
      },
    });
  }
}
