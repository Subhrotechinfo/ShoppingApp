import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();   
  
  recipes : Recipe[] = [
    new Recipe('A Test recipe','This is simply a test',
    'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Another Test recipe','This is simply a test',
    'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
