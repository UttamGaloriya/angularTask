import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  login() {
    localStorage.setItem('authToken', 'abcdefghidfgdfghdfkljghl')
  }
}
