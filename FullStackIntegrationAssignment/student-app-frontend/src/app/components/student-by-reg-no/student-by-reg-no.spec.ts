import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentByRegNo } from './student-by-reg-no';

describe('StudentByRegNo', () => {
  let component: StudentByRegNo;
  let fixture: ComponentFixture<StudentByRegNo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentByRegNo],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentByRegNo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
