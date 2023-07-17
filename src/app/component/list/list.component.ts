import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiData } from 'src/app/api-data';
import { UserService } from 'src/app/services/user.service';
import { ConfirmComponent } from '../confirm/confirm.component';
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
  userList!: ApiData[];
  constructor(private userServices: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userListCall()
  }


  //user list call
  userListCall() {
    this.userList$ = this.userServices.getUserList().subscribe(
      (response) => { this.userList = response },
      error => console.log("Error Occurred while fetching data"),
      () => console.log('User list fetched successfully')
    )
  }

  //submit function
  submit($event: any, id: number) {
    if ($event.valid) {
      this.userServices.updateUser($event.value, id).subscribe(
        (res) => {
          console.log(res);
          this.localUpdate(res, id);
          console.log(this.userList);
        },
        error => console.log(error),
        () => this.editIndex = -1
      )

    } else {
      alert('Please fill all fields');
    }
  }


  //edit function 
  edit(index: number) {
    this.editIndex = index
  }
  delete(user: ApiData) {
    this.dialog.open(ConfirmComponent, {
      data: user,
      width: '300px',
    }).afterClosed().subscribe((res) => {
      console.log(res)
      if (res) {
        this.userServices.deleteUser(user.id).subscribe(
          response => console.log(response),
          error => console.log(error),
          () => console.log("complete")
        )
        let index = this.userList.findIndex((res) => user.id == res.id);
        this.userList.splice(index, 1)
      } else {

      }
    })
  }

  //cancel function
  cancel() {
    this.editIndex = -1
  }
  localUpdate(res: ApiData, id: number) {
    let index = this.userList.findIndex((res) => id == res.id);
    let newUser = this.userList[index]
    newUser.name = res.name;
    newUser.username = res.username
    this.userList[index] = newUser
  }

  //page destroy
  ngOnDestroy() {
    this.userList$.unsubscribe()
  }
}
