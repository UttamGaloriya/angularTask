import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiData } from 'src/app/api-data';

@Component({
  selector: 'app-view-dailog-box',
  templateUrl: './view-dailog-box.component.html',
  styleUrls: ['./view-dailog-box.component.scss']
})
export class ViewDailogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewDailogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApiData,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
