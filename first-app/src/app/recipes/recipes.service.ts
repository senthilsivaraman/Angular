import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipesService{
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [new Recipe('Mutton Kuzhambu',
    'Curry made with delicious goat meat',
     'https://yummyindiankitchen.com/wp-content/uploads/2019/09/mutton-kulambu-in-tamil-style-mutton-kuzhambu.jpg' ),
     new Recipe('Meen Kuzhambu',
    'Curry made with delicious fish',
     'https://c4.staticflickr.com/8/7790/17853246901_d175bac7cd_z.jpg' )
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}