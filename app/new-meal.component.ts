import { Component } from '@angular/core';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
  </div>
  `
})
export class NewMealComponent {
}
