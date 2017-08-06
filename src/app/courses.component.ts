import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <input [(ngModel)]="input"/> <br />
        {{ input | textFormat }}
    `
})
export class CoursesComponent {
    input: string;
}
