import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStudents } from './school-students';

describe('SchoolStudents', () => {
  let component: SchoolStudents;
  let fixture: ComponentFixture<SchoolStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolStudents],
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolStudents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
