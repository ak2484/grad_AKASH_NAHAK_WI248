import { ChangeDetectorRef, Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-strength',
  standalone: false,
  templateUrl: './strength.html',
  styleUrl: './strength.css',
})
export class Strength {
  gender = 'MALE';
  standard = 5;
  count: any;

  constructor(
    public studentService: StudentService,
    public cdr: ChangeDetectorRef,
  ) {}
  getStrength() {
    this.studentService.getStrength(this.gender, this.standard).subscribe((data) => {
      this.count = data;
      this.cdr.detectChanges();
    });
  }
}
