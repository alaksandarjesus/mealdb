import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealMealComponent } from './meal-meal.component';

describe('MealMealComponent', () => {
  let component: MealMealComponent;
  let fixture: ComponentFixture<MealMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
