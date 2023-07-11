import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { ViewDailogBoxComponent } from '../../view-dailog-box/view-dailog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiData } from 'src/app/api-data';

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
    const dialogRef = this.dialog.open(ViewDailogBoxComponent, {
      width: '700px',
      data: data,
    });
  }
}
