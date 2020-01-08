import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('Mutton Kuzhambu',
                      'Curry made with delicious goat meat marinated with spices and Indian Masala tossed in oil with onions, cashew and green chilly',
                       'https://yummyindiankitchen.com/wp-content/uploads/2019/09/mutton-kulambu-in-tamil-style-mutton-kuzhambu.jpg' ),
                       new Recipe('Mutton Kuzhambu',
                      'Curry made with delicious goat meat marinated with spices and Indian Masala tossed in oil with onions, cashew and green chilly',
                       'https://yummyindiankitchen.com/wp-content/uploads/2019/09/mutton-kulambu-in-tamil-style-mutton-kuzhambu.jpg' )
                      ];


  constructor() { }

  ngOnInit() {
  }

}
