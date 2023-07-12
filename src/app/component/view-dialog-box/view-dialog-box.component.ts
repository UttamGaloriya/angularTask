import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiData } from 'src/app/api-data';

@Component({
  selector: 'app-view-dialog-box',
  templateUrl: './view-dialog-box.component.html',
  styleUrls: ['./view-dialog-box.component.scss']
})
export class ViewDialogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApiData,
  ) { }


  ngOnInit(): void {
    console.log(this.data)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
