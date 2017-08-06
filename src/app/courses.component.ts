import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <span   id="star"
                class="glyphicon"
                [class.glyphicon-star]="isFavorite"
                [class.glyphicon-star-empty]="!isFavorite"
                (click)="onClick()"
            ></span>
    `
})
export class CoursesComponent {

    isFavorite: boolean;

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}
