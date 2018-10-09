import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input('recipe')
    element: { name: string, description: string, imagePath: string }
    @Output()
    recipeClicked = new EventEmitter<{ name: string, description: string, imagePath: string }>()
    constructor() { }
    ngOnInit() {
    }
    onClick() {
        this.recipeClicked.emit({ name: this.element.name, description: this.element.description, imagePath: this.element.imagePath })
    }
}