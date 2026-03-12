import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/Students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) {}

  getAllStudents() {
    return this.http.get<Student[]>(this.baseUrl);
  }

  getStudentByRegNo(regNo: any) {
    return this.http.get<Student[]>(`${this.baseUrl}/${regNo}`);
  }

  addStudent(student: any) {
    return this.http.post(this.baseUrl, student, { responseType: 'text' });
  }

  updateStudent(regNo: any, student: any) {
    return this.http.put(`${this.baseUrl}/${regNo}`, student, { responseType: 'text' });
  }

  deleteStudent(regNo: number) {
    return this.http.delete(`${this.baseUrl}/${regNo}`, { responseType: 'text' });
  }

  getStudentsBySchool(name: any) {
    return this.http.get(`${this.baseUrl}/school?name=${name}`);
  }

  getSchoolCount(name: any) {
    return this.http.get(`${this.baseUrl}/school/count?name=${name}`);
  }

  getStandardCount(standard: any) {
    return this.http.get(`${this.baseUrl}/school/standard/count?class=${standard}`);
  }

  getResults(pass: any) {
    return this.http.get(`${this.baseUrl}/result?pass=${pass}`);
  }

  getStrength(gender: any, standard: any) {
    return this.http.get(`${this.baseUrl}/strength?gender=${gender}&standard=${standard}`);
  }
}
