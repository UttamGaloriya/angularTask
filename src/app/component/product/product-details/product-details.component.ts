import { Component, HostListener, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { TabsData } from 'src/app/api-data';
import { ProductsService } from 'src/app/services/products.service';
import { tempProduct } from 'src/app/services/temp.product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  colsNumber: number = 4
  //host
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    let screenWidth = (event.target as Window).innerWidth;
    if (screenWidth > 1200) {
      this.colsNumber = 4
    }
    else if (screenWidth > 900) {
      this.colsNumber = 3
    } else if (screenWidth > 600) {
      this.colsNumber = 2
    } else if (screenWidth > 100) {
      this.colsNumber = 1
    } else {
      this.colsNumber = 1
    }
  }
  // MatPaginator Inputs
  length!: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  myPage: PageEvent = {
    length: 0,
    pageIndex: 0,
    pageSize: 10
  }
  pageEvent: PageEvent | undefined;
  productList$!: Subscription;
  product: any[] = tempProduct

  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.productCall(this.myPage)
  }
  productCall(page: PageEvent) {
    this.productList$ = this.products.allProduct(page).subscribe(
      (res) => { this.product = res.products, this.product.map((res: any) => res.quality = 1), this.length = res.total },
      (error) => { console.log(error) },
      () => { }
    )
  }

  addCart(product: any) {
    this.products.addCartProduct(product)
  }

  pageChange(event: PageEvent) {
    console.log(event.pageIndex)
    this.product = tempProduct
    this.productCall(event)
  }


}
