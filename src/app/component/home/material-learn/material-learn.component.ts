import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material-learn',
  templateUrl: './material-learn.component.html',
  styleUrls: ['./material-learn.component.scss']
})
export class MaterialLearnComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }
  change($event: any) {
  }

}
