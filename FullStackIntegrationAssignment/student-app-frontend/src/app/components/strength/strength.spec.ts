import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strength } from './strength';

describe('Strength', () => {
  let component: Strength;
  let fixture: ComponentFixture<Strength>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Strength],
    }).compileComponents();

    fixture = TestBed.createComponent(Strength);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
