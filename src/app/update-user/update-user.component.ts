import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  user: User = new User();
  content?: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => console.log(error)
    );
  }

  goToUsertList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(
      (data) => {
        this.goToUsertList();
      },
      (error) => console.log(error)
    );
  }
}
