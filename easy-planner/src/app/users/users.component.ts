import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UsersService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  editUser: User; // the user currently begin edited

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  add(name: string): void {
    this.editUser = undefined;
    name = name.trim();
    if (!name) { return; }

    // The server will generae the id for this new User
    const newUser: User = { name } as User;
    this.userService.addUser(newUser)
      .subscribe(user => this.users.push(user));
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user.studentId).subscribe();
  }

  edit(user) {
    this.editUser = user;
  }

  serach(searchTerm: string) {
    this.editUser = undefined;
    if (searchTerm) {
      this.userService.searchUsers(searchTerm)
        .subscribe(users => this.users = users);
    }
  }

  update() {
    if (this.editUser) {
      this.userService.updateUser(this.editUser)
        .subscribe(user => {
          // replace the user in the users list with update from server
          const ix = user ? this.users.findIndex(h => h.studentId === user.studentId) : -1;
          if (ix > -1) { this.users[ix] = user; }
        });
        this.editUser = undefined;
    }
  }
}
