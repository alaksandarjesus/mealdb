import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealIngredientsComponent } from './meal-ingredients.component';

describe('MealIngredientsComponent', () => {
  let component: MealIngredientsComponent;
  let fixture: ComponentFixture<MealIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
