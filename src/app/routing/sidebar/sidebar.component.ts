import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  @Output() newToggleEvent = new EventEmitter<unknown>();

  constructor(private product: ProductsService) {

  }
  ngOnInit() {

  }

  toggleDrawer() {
    this.newToggleEvent.emit()
    this.drawer.toggle();
  }

  get mobileQuery() {
    let screenWidth = window.innerWidth;
    if (screenWidth > 700) {
      return 'side'
    } else {
      return 'over'
    }
  }
}
