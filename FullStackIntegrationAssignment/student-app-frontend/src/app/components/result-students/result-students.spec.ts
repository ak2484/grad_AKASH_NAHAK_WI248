import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultStudents } from './result-students';

describe('ResultStudents', () => {
  let component: ResultStudents;
  let fixture: ComponentFixture<ResultStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultStudents],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultStudents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
