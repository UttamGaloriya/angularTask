import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiData } from 'src/app/api-data';
import { UserService } from 'src/app/services/user.service';
import { ConfirmComponent } from '../confirm/confirm.component';
export interface UserObj {
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
  userList$!: Subscription;
  userList!: ApiData[];
  constructor(private userServices: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userListCall()
  }


  //user list call
  userListCall() {
    this.userList$ = this.userServices.getUserList().subscribe(
      (response) => {
        this.userList = response,
          this.userList.map((res) => res.isEditable = false)
        console.log(this.userList)
      },
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
        () => console.log("complete")
      )

    } else {
      alert('Please fill all fields');
    }
  }


  //edit function 
  edit(user: ApiData) {
    this.userList.map((res) => res.isEditable = false)
    let index = this.userList.findIndex((res) => user.id == res.id);
    let newUser = this.userList[index]
    newUser.isEditable = true
    this.userList[index] = newUser
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
      }
    })
  }

  //cancel function
  cancel() {
    this.userList.map((res) => res.isEditable = false)
  }

  localUpdate(res: ApiData, id: number) {
    let index = this.userList.findIndex((res) => id == res.id);
    let newUser = this.userList[index]
    newUser.name = res.name;
    newUser.username = res.username
    newUser.isEditable = false
    this.userList[index] = newUser
  }

  //page destroy
  ngOnDestroy() {
    this.userList$.unsubscribe()
  }
}


