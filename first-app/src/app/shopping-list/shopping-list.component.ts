import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] =[
    new Ingredient('Chicken',2),
    new Ingredient('Onion', 5),
    new Ingredient('Tomato', 4),
    new Ingredient('Curry Leaves', 1),
    new Ingredient('Coriander', 2),
    new Ingredient('Spices', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

}
