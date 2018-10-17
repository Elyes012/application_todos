import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ApitodoService } from '../apitodo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
password: String;
email: String;
formlogin: FormGroup;
message: String;

constructor(private apitodoService: ApitodoService, private router: Router, private fb: FormBuilder) {
  this.formlogin = this.fb.group({
    email: ['', [Validators.email, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(8)]],

  });
}

loginUser() {
  if (this.formlogin.valid) {
    this.message = '';
    this.apitodoService.login(this.formlogin.value).subscribe(res => {
      console.log('login component ==>', res);
      if (res.json().message === 'ok' ) {
        localStorage.setItem('usertoken', res.json().userToken);
        this.router.navigateByUrl('/home');
      } else {
        this.message = res.json().message;
      }
    });

  }
}
  ngOnInit() {
  }

}
