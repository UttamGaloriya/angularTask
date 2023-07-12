import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiData } from 'src/app/api-data';
import { ViewDialogBoxComponent } from '../../view-dialog-box/view-dialog-box.component';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  constructor(private user: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user.getUserList().subscribe((res) => this.dataSource = new MatTableDataSource<any>(res))

  }
  displayedColumns: string[] = ['position', 'name', 'username', 'website', 'email', 'phone', 'action'];
  openDialog(data: ApiData): void {
    const dialogRef = this.dialog.open(ViewDialogBoxComponent, {
      width: '500px',
      data: data,
    });
  }
}
