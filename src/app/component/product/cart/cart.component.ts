import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  myProduct: any
  productList$!: Subscription;
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.myCartProduct()
  }

  myCartProduct() {
    this.products.getCartData().subscribe(
      (res) => { this.myProduct = res, console.log(res) }
    )
  }
  remove(product: any) {
    let index = this.myProduct.findIndex((res: any) => product.id == res.id);
    let updateProduct = this.myProduct[index]
    if (updateProduct.quality > 1) {
      updateProduct.quality = updateProduct.quality - 1
      this.myProduct[index] = updateProduct
    }
  }
  add(product: any) {
    let index = this.myProduct.findIndex((res: any) => product.id == res.id);
    let updateProduct = this.myProduct[index]
    updateProduct.quality = updateProduct.quality + 1
    this.myProduct[index] = updateProduct
  }
  removeItem(product: any) {
    console.log("working")
    let index = this.myProduct.findIndex((res: any) => product.id == res.id);
    this.myProduct.splice(index, 1)
  }
  buyNow() {

  }
  ngOnDestroy() {
    this.productList$.unsubscribe()
  }
}
