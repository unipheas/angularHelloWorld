import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    email = "me@example.com";

    onKeyUp() {
        console.log(this.email);
    }
}
