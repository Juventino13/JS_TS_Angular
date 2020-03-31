import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tiay08.files.wordpress.com/2012/02/pizza-1.jpg?w=584'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://sites.google.com/site/resetastipicashondurenas2/_/rsrc/1457012653966/resetas-tipi/image004.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
