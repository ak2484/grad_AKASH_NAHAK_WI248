import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Students';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.html',
  standalone: false,
  styleUrls: ['./admin-page.css'],
})
export class AdminPage implements OnInit {
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
      // error: (err) => {
      //   console.error('API ERROR', err);
      // },
    });
  }

  studentForm: Student = {
    regNo: null,
    rollNo: null,
    name: '',
    school: '',
    standard: null,
    gender: '',
    percentage: null,
  };

  editIndex: number | null = null;
  showForm = false;

  openAddForm() {
    this.resetForm();
    this.editIndex = null;
    this.showForm = true;
  }

  saveStudent() {
    // Validate before sending
    if (
      this.studentForm.regNo == null ||
      this.studentForm.rollNo == null ||
      !this.studentForm.name ||
      !this.studentForm.school ||
      this.studentForm.standard == null ||
      !['MALE', 'FEMALE'].includes(this.studentForm.gender.toUpperCase()) ||
      this.studentForm.percentage == null ||
      this.studentForm.percentage < 0 ||
      this.studentForm.percentage > 100
    ) {
      alert('Please fill all fields correctly.');
      return;
    }

    if (this.editIndex !== null) {
      // Update student
      this.studentService.updateStudent(this.studentForm.regNo!, this.studentForm).subscribe({
        next: () => {
          this.students[this.editIndex!] = { ...this.studentForm };
          this.students = [...this.students];
          this.resetForm();
          this.showForm = false;
          this.editIndex = null;
        },
      });
    } else {
      // Add student
      this.studentService.addStudent(this.studentForm).subscribe({
        next: (newStudent: any) => {
          this.students = [...this.students, { ...this.studentForm }];
          this.resetForm();
          this.showForm = false;
        },
      });
    }
  }

  editStudent(index: number) {
    this.studentForm = { ...this.students[index] };
    this.editIndex = index;
    this.showForm = true;
  }

  deleteStudent(index: number) {
    const student = this.students[index];
    if (!student?.regNo) return;

    const confirmDelete = confirm(
      `Are you sure you want to delete ${student.name} (RegNo: ${student.regNo})?`,
    );

    if (!confirmDelete) return;

    this.studentService.deleteStudent(student.regNo).subscribe({
      next: () => {
        this.students.splice(index, 1);
        this.students = [...this.students]; // force refresh
        this.loadStudents();
        this.cdr.detectChanges();
      },
    });
  }

  cancelEdit() {
    this.resetForm();
    this.showForm = false;
  }

  resetForm() {
    this.studentForm = {
      regNo: null,
      rollNo: null,
      name: '',
      school: '',
      standard: null,
      gender: '',
      percentage: null,
    };
    this.cdr.detectChanges();
  }
}
