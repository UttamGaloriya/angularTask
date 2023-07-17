import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiData } from 'src/app/api-data';
import { UserService } from 'src/app/services/user.service';
export interface userObj {
  name: string;
  username: string;
  id: number
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  editIndex: number = -1
  userList$!: Subscription;
  userobj: userObj = {
    name: "uttam galoriya",
    username: "uttam",
    id: 1
  }
  userList?: any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList$ = this.userService.getUserList().subscribe(
      (response: ApiData) => { this.userList = response },
      error => console.log("Error Occured while fetching data"),
      () => console.log('User list fetched successfully')
    )
  }

  edit(index: number) {
    this.editIndex = index
  }
  cancel() {
    this.editIndex = -1
  }
  ngOnDestroy() {
    this.userList$.unsubscribe()
  }
}
