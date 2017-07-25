import { Component } from '@angular/core';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  outputs: ['onUpdateTotalCalories'],
  template: `
    <div class="edit-form">
      <h3>Edit Description:</h3>
      <input [(ngModel)]="meal.name"/>
      <input [(ngModel)]="meal.details"/>
      <input [(ngModel)]="meal.calories" type="number" #newCalories/>
      <button (click)="updateTotalCalories(newCalories)">Update</button>
    </div>
  `
})
export class EditMealDetailsComponent {
}
