import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { Menu } from '../constants';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'Goal Planner';
  dynamycClass = ['dynamycClass', 'highlight', 'bold', 'italic'];
  isRed = false;
  products = ['Apple', 'Banana', 'Orange'];

  menu = Menu;

  name = '';
  email = '';
  password = '';

  nameReactive = new FormControl('Cristian');
  emailReactive = new FormControl('');
  passwordReactive = new FormControl('');

  loginGroupForm = new FormGroup({
    nameReactiveGroup: new FormControl('Cristian', Validators.required),
    emailReactiveGroup: new FormControl('', Validators.required),
    passwordReactiveGroup: new FormControl('', Validators.required),
  });

  constructor() {
    setTimeout(() => {
      this.title = 'Project is working';
    }, 1000);
  }

  login() {
    alert('Welcome');
    this.title = `Welcome ${this.name}`;
  }

  loginReactive() {
    alert('Welcome');
    this.title = `Welcome ${this.nameReactive.value}`;
  }

  loginReactiveGroup() {
    alert('Welcome');
    this.title = `Welcome ${this.loginGroupForm.value.nameReactiveGroup}`;
  }

  change() {
    this.isRed = !this.isRed;
    this.products.pop();
    this.name = 'Cristian';
    this.email = 'qj9y1@example.com';
    this.password = '123456';
  }
}
