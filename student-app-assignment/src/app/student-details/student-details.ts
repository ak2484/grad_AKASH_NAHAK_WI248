import { Component } from '@angular/core';

interface Student {
  regNo: number;
  rollNo: number;
  name: string;
  school: string;
  standard: number;
}

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {
  students: Student[] = [
    { regNo: 101, rollNo: 1, name: 'Akash', school: 'HCHS', standard: 10 },
    { regNo: 102, rollNo: 2, name: 'Rahul', school: 'HCHS', standard: 9 },
    { regNo: 103, rollNo: 3, name: 'Vijay', school: 'HCHS', standard: 10 },
    { regNo: 104, rollNo: 4, name: 'Nitin', school: 'HCHS', standard: 10 },
    { regNo: 105, rollNo: 5, name: 'Ron', school: 'HCHS', standard: 9 },
    { regNo: 105, rollNo: 5, name: 'Ronak', school: 'HCHS', standard: 10 },
  ];
}
