import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-page-two',
  templateUrl: './lazy-page-two.component.html',
  styleUrls: ['./lazy-page-two.component.scss']
})
export class LazyPageTwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('authToken');
    this.router.navigateByUrl('/first')
  }
}
