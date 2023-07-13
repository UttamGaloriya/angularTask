import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    if (this.userService.isLogin) {
      this.router.navigateByUrl('/table')
    } else {
      this.router.navigateByUrl('/account/login')
    }
  }

}
