import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUserList().subscribe((data) => (this.users = data));
  }

  updateUser(id: number) {
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      console.log(data);
      this.getUsers();
    });
  }

  userDetails(id: number) {
    this.router.navigate(['user-details', id]);
  }
}
