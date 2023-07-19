import { Component, OnInit } from '@angular/core';
import { TabsData } from 'src/app/api-data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productData: TabsData[] = [{
    title: "Description",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem dolorem
    perferendis velit debitis repellat asperiores natus eum explic itaque corporis? Repudiandae tempore autem cumque `
  },
  {
    title: 'Additional Information',
    content: `Lorem ipsum dolor sit amet`

  },
  {
    title: 'Reviews (3)',
    content: `product Review`
  }
  ]
}
