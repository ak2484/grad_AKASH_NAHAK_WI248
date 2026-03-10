import { Component } from '@angular/core';
import { UserService } from '../services/user-service';

interface Student {
  regNo: number | null;
  rollNo: number | null;
  name: string;
  school: string;
  standard: number | null;
}

@Component({
  selector: 'app-admin-page',
  standalone: false,
  templateUrl: './admin-page.html',
  styleUrls: ['./admin-page.css'],
})
export class AdminPage {
  constructor(public us: UserService) {}

  students: Student[] = [
    { regNo: 101, rollNo: 1, name: 'Akash', school: 'HCHS', standard: 10 },
    { regNo: 102, rollNo: 2, name: 'Rahul', school: 'HCHS', standard: 9 },
    { regNo: 103, rollNo: 3, name: 'Vijay', school: 'HCHS', standard: 10 },
    { regNo: 104, rollNo: 4, name: 'Nitin', school: 'HCHS', standard: 10 },
    { regNo: 105, rollNo: 5, name: 'Ron', school: 'HCHS', standard: 9 },
    { regNo: 106, rollNo: 6, name: 'Ronak', school: 'HCHS', standard: 10 },
  ];

  studentForm: Student = {
    regNo: null,
    rollNo: null,
    name: '',
    school: '',
    standard: null,
  };

  editIndex: number | null = null;

  // controls form visibility
  showForm: boolean = false;

  openAddForm() {
    this.resetForm();
    this.editIndex = null;
    this.showForm = true;
  }

  saveStudent() {
    const student: Student = {
      regNo: Number(this.studentForm.regNo),
      rollNo: Number(this.studentForm.rollNo),
      name: this.studentForm.name,
      school: this.studentForm.school,
      standard: Number(this.studentForm.standard),
    };

    if (this.editIndex !== null) {
      this.students[this.editIndex] = student;
    } else {
      this.students.push(student);
    }

    this.resetForm();
    this.editIndex = null;
    this.showForm = false; // close form after save
  }

  editStudent(index: number) {
    this.studentForm = { ...this.students[index] };
    this.editIndex = index;
    this.showForm = true; // open form
  }

  deleteStudent(index: number) {
    const confirmDelete = confirm(
      `Are you sure you want to delete ${this.students[index].name} with roll no : ${this.students[index].rollNo}?`,
    );

    if (confirmDelete) {
      this.students.splice(index, 1);
    }
  }

  cancelEdit() {
    this.resetForm();
    this.editIndex = null;
    this.showForm = false; // close form
  }

  resetForm() {
    this.studentForm = {
      regNo: null,
      rollNo: null,
      name: '',
      school: '',
      standard: null,
    };
  }
}
