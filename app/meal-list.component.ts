import { Component } from '@angular/core';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
    <div class="form">
      <div class="form-fields">
        <label>By Calories:</label>
      </div>
    </div>
  `
})
export class MealListComponent {
}
