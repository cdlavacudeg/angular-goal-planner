import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1 [class]="dynamycClass">{{ title }}</h1> `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'Goal Planner';
  dynamycClass = ['dynamycClass', 'highlight', 'bold', 'italic'];

  constructor() {
    setTimeout(() => {
      this.title = 'Project is working';
    }, 1000);
  }
}
