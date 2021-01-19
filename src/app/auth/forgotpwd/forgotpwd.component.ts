import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})
export class ForgotpwdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#form-login').validate()
  }

}
