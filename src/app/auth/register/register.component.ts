import { Component, OnInit } from '@angular/core';
import { NotifyService } from "../../services/notify/notify.service";
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = '';
  email = '';
  constructor(private notify: NotifyService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    $('#form-login').validate();
  }
  register() {
    if (!this.username) {
      this.notify.error('Please Fill Out User Name Field', 'Form Error')
    } if (!this.email) {
      this.notify.error('Please Fill Out the Email Field', 'Form Error')
    } if (this.email && this.username) {
      this.auth.register(this.username, this.email).subscribe((res: any) => {
        console.log("RegisterComponent -> register -> res", res)
        if (res.status) {
          this.notify.info('We have sent you message. \nPlease check your email', 'Registration');
        } else {
          this.notify.error('Something went wrong. \nPlease try again later.', 'Registration');
        }
      })
    }
  }
}