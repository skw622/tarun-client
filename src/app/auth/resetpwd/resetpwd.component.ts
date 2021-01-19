import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.scss']
})
export class ResetpwdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#form-login').validate()
  }

}
