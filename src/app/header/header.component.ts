import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'Goal Planner';
  dynamycClass = ['dynamycClass', 'highlight', 'bold', 'italic'];
  isRed = false;
  products = ['Apple', 'Banana', 'Orange'];

  constructor() {
    setTimeout(() => {
      this.title = 'Project is working';
    }, 1000);
  }

  login() {
    alert('Welcome');
    this.title = 'User loged';
  }

  change() {
    this.isRed = !this.isRed;
    this.products.pop();
  }
}
