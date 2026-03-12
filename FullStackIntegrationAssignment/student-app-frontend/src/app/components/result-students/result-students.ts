import { ChangeDetectorRef, Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-result-students',
  standalone: false,
  templateUrl: './result-students.html',
  styleUrl: './result-students.css',
})
export class ResultStudents {
  students: any[] = [];
  pass: boolean = true;

  constructor(
    public studentService: StudentService,
    public cdr: ChangeDetectorRef,
  ) {}
  loadResults(pass: boolean) {
    this.studentService.getResults(pass).subscribe((data: any) => {
      this.students = data;
      this.cdr.detectChanges();
    });
  }
}
