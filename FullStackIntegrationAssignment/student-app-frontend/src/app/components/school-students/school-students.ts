import { ChangeDetectorRef, Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-school-students',
  standalone: false,
  templateUrl: './school-students.html',
  styleUrl: './school-students.css',
})
export class SchoolStudents {
  schoolName = '';
  students: any[] = [];

  constructor(
    public studentService: StudentService,
    public cdr: ChangeDetectorRef,
  ) {}

  search() {
    this.studentService.getStudentsBySchool(this.schoolName).subscribe((data: any) => {
      this.students = data;
      this.cdr.detectChanges();
    });
  }
}
