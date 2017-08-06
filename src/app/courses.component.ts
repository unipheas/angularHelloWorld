import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <span id="star" [class]="'glyphicon glyphicon-' + star" (click)="favClick()"></span>
    `
})
export class CoursesComponent {

    star: any = 'star-empty';

    favClick() {
        if (this.star === 'star') {
            this.star = 'star-empty';
        } else if (this.star === 'star-empty') {
            this.star = 'star';
        }
    }
}
