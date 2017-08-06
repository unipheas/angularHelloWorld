import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <input (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    onKeyUp() {
        console.log('Enter was pressed');
    }
}
