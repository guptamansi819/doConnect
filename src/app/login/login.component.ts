import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private service: UserserviceService,
    private router: Router,
    private bar: MatSnackBar
  ) {}
  email: string = '';
  password: string = '';
  log(): void {
    this.service
      .login({
        email: this.email,
        password: this.password,
      })
      .then((res) => {
        if (res === 'admin') {
          this.router.navigate(['adminhome']);
        } else if (res === 'ok') {
          this.service
            .getUserByEmail(this.email)
            .then((res) => {
              if (res !== null) {
                localStorage.setItem('name', res.name);
                localStorage.setItem('email', res.email);
              }
            })
            .then(() => this.router.navigate(['userhome']));
        } else {
          this.bar.open('Please Check the credentials', 'Close', {
            duration: 3000,
          });
        }
      });
  }
  ngOnInit(): void {}
}
