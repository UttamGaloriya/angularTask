import { Component, OnInit } from '@angular/core';
import { TabsData } from 'src/app/api-data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  customer: TabsData[] = [{
    "title": "Name",
    "content": "This is the default tab."
  }, {
    "title": "details",
    "content": "This is the default tab."
  }, {
    "title": "address",
    "content": "This is the default tab."
  }]

}
