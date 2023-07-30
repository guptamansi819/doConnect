import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private bar: MatSnackBar, private service: UserserviceService) {}
  name: string = '';
  email: string = '';
  password: string = '';
  register(): void {
    this.service
      .register({
        name: this.name,
        email: this.email,
        password: this.password,
      })
      .then((res) => {
        if (res === 'ok') {
          this.name = '';
          this.email = '';
          this.password = '';
          this.bar.open('Registered Succesfully', 'Close', {
            duration: 3000,
          });
        } else {
          this.bar.open('Something went wrong please try again', 'Close', {
            duration: 3000,
          });
        }
      });
  }

  ngOnInit(): void {}
}
