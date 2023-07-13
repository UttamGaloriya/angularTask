import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnChanges {

  @Input() data: string = 'uttam galoriya'

  constructor() { console.log("constructor call") }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && changes.data.currentValue) {
      console.log(changes)
      console.log('Input name changed:', changes.data.currentValue);
      // Perform additional actions based on the changed input
    }
    console.log("ng on change")
  }
  ngOnInit() {
    console.log("ngOnInit calll")
  }

  ngDoCheck() {
    console.log("ng do check call")
  }
  ngAfterContentInit() {
    console.log("AfterContentInit")
  }
  ngAfterContentChecked() {
    console.log("content change")
  }
}
