import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm = new FormGroup('');
  constructor() { }

  ngOnInit() {
    /* loginForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required
      ])
    }); */
  }
}
