import { ChangeDetectorRef, Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Students';

@Component({
  selector: 'app-student-by-reg-no',
  standalone: false,
  templateUrl: './student-by-reg-no.html',
  styleUrl: './student-by-reg-no.css',
})
export class StudentByRegNo {
  regNo!: number;
  students: Student[] = [];
  errorMessage: string = '';

  constructor(
    private studentService: StudentService,
    public cdr: ChangeDetectorRef,
  ) {}

  searchStudent() {
    if (!this.regNo) {
      this.errorMessage = 'Please enter a registration number';
      return;
    }

    this.studentService.getStudentByRegNo(this.regNo).subscribe({
      next: (data) => {
        this.students = data;
        this.errorMessage = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error fetching student';
        this.students = [];
      },
    });
  }
}
