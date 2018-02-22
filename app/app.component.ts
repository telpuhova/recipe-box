import { Component } from '@angular/core';

//annotation
@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h1>Recipe box</h1>
    <ul>
      <li *ngFor="let currentRecipe of recipes">
        {{currentRecipe.title}}
        <ul>
          <li *ngFor="let currentIngredient of {{currentRecipe.ingredients}}">currentIngredient</li>
        </ul>
        {{currentRecipe.directions}}
      </li>
    </ul>
  </div>
  `
})

//class definition
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Pizza', ['telephone', 'money'], 'Take ypur phone and call the pizza place. When arrives, pay for the pizza as needed.'),
    new Recipe('Soup', ['Mom'], 'Ask your mom to make you a bowl of soup. Wait.')
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string){}
}
