import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiData } from 'src/app/api-data';
import { ViewDialogBoxComponent } from '../../view-dialog-box/view-dialog-box.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit {
  subscription: Subscription | undefined
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'username', 'website', 'email', 'phone', 'action'];
  @HostListener('window:scroll', ['$event']) click() {
    console.log("working")
  }

  constructor(private user: UserService, public dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.route.snapshot.data.data);
    console.log(this.route.snapshot.data.data)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  openDialog(data: ApiData): void {
    const dialogRef = this.dialog.open(ViewDialogBoxComponent, {
      width: '500px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((res) => { console.log(res) })
  }

  logout() {
    localStorage.removeItem('access-token')
    this.router.navigateByUrl('/account/login')
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
