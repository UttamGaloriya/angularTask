import { Component, Input, OnInit } from '@angular/core';
import { TabsData } from 'src/app/api-data';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() TabsData: TabsData[] = [{
    "title": "First",
    "content": "This is the default tab."
  }, {
    "title": "Second",
    "content": "This is the default tab."
  }, {
    "title": "Third",
    "content": "This is the default tab."
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
