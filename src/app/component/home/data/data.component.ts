import { Component, OnInit } from '@angular/core';
import { TabsData } from 'src/app/api-data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  homeData: TabsData[] = [
    {
      title: "Home",
      content: `<h1>Welcome to our website</h1><p>Lorem ipsum dolor`,
    },
    {
      title: 'About Us',
      content: `<div style="text-align:center"><img src="../../assets/images/
    logo_transparent.png"/></div>`,
    },
    {
      title: 'Contact us',
      content: `<form action="">
    <label for="name">Name:</label></br>
    <input type="text" id="name"></br>
    </br>
    <label for="email">Email address:</label></br>
    <input type="email" id="email"></br>
    </br>
    <label for="message">Message:</label></br>
    <textarea rows="4" cols="50" name="message" formControlName="
    message"></textarea></br>
    </br>
    <button (click)="submit()">Submit</button>
    `
    }
  ]
}
