import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiData } from 'src/app/api-data';
import { ViewDialogBoxComponent } from '../../view-dialog-box/view-dialog-box.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit {
  subscription: Subscription | undefined
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['position', 'name', 'username', 'website', 'email', 'phone', 'action'];

  constructor(private user: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.user.getUserList().subscribe((res) => this.dataSource = new MatTableDataSource<any>(res))
  }

  openDialog(data: ApiData): void {
    const dialogRef = this.dialog.open(ViewDialogBoxComponent, {
      width: '500px',
      data: data,
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
    console.log("destroyed")
  }
}
