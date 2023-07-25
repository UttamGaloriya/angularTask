import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private api = "https://dummyjson.com/products"
  constructor(private http: HttpClient, private snackbar: SnackBarService) { }

  productCart = new BehaviorSubject<any>('')
  updateCart(data: any) {
    this.productCart.next(data)
  }

  getCartData(): Observable<any> {
    return this.productCart.pipe(
      switchMap((data: any) => {
        let productData = localStorage.getItem('productCart')
        if (productData != null) {
          const cartProducts = JSON.parse(productData)
          return [cartProducts];
        } else {
          return [];
        }
      })
    );
  }

  allProduct(page: PageEvent): Observable<any> {
    return this.http.get(`${this.api}?limit=${page.pageSize}&skip=${page.pageIndex * page.pageSize}`)
  }

  addCartProduct(product: any) {

    const productCart = localStorage.getItem('productCart')
    if (productCart !== null) {
      const cartProducts = JSON.parse(productCart)
      let index = cartProducts.findIndex((res: any) => product.id === res.id);
      console.log(index)
      if (index < 0) {
        cartProducts.push(product)
        localStorage.setItem('productCart', JSON.stringify(cartProducts))
      }
    } else {
      let cartProducts = []
      cartProducts.push(product)
      console.log("cart products", product);
      localStorage.setItem('productCart', JSON.stringify(cartProducts))
    }
    this.updateCart(productCart)
    this.snackbar.showSnackBar('product added successfully', 'ok', 'success')
  }


  removeCartList(product: any) {
    const productCart = localStorage.getItem('productCart')
    if (productCart !== null) {
      const cartProducts = JSON.parse(productCart)
      let index = cartProducts.findIndex((res: any) => product.id === res.id);
      cartProducts.splice(index, 1)
      localStorage.setItem('productCart', JSON.stringify(cartProducts))
      this.updateCart(cartProducts)
    }
  }




}
