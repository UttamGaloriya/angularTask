import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  cartNumber: number | undefined
  @Output() newToggleEvent = new EventEmitter<unknown>();
  constructor(private router: Router, private products: ProductsService) { }

  logout() {
    localStorage.removeItem('access-token')
    this.router.navigateByUrl('/account/login')
  }
  ngOnInit(): void {
    this.myCartNumber()
  }

  myCartNumber() {
    this.products.getCartData().subscribe(
      (res) => {
        console.log(res)
        if (res.length > 0) {
          this.cartNumber = res.length;
        } else {
          this.cartNumber = undefined
          console.log(res)
        }
      }
    )
  }

  toggle() {
    this.newToggleEvent.emit()
  }
}
