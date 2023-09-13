import { Component } from '@angular/core';

import {User} from './user'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  color = true
  names: string[] = ['mo', 'ahmed', 'omar']
  users: User[] = [
    {
      name: 'mostafa',
      age: 25,
      salary: 20000,
      gender: 'male',
      work: function () {
        alert('welcome  ' + this.name);
      },
    },

    {
      name: 'mahmod',
      age: 25,
      salary: 20000,
      gender: 'male',
      work: function () {
        alert('welcome  ' + this.name);
      },
    },
    {
      name: 'salma',
      age: 25,
      salary: 20000,
      gender: 'fmale',
      work: function () {
        alert('welcome  ' + this.name);
      },
    },
    {
      name: 'rehab',
      age: 25,
      salary: 20000,
      gender: 'female',
      work: function () {
        alert('welcome  ' + this.name);
      },
    },
    {
      name: 'gehad',
      age: 25,
      salary: 20000,
      gender: 'female',
      work: function () {
        alert('welcome  ' + this.name);
      },
    },
  ];
  toggleColor() {
    this.color = !this.color
  }
  method() {
    return "Hello this is a " + this.title + " App"
  }
}
