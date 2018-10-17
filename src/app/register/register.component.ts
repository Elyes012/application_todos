import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ApitodoService } from '../apitodo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name: String;
lastname: String;
email: String;
password: String;
formregister: FormGroup;

constructor(private apitodoService: ApitodoService, private router: Router, private fb: FormBuilder) {
  this.formregister = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    lastname: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(8)]],
  });
}

registerUser() {
  if (this.formregister.valid) {
    this.apitodoService.register(this.formregister.value).subscribe(res => {
      console.log('register respone ==>', res);
      this.router.navigateByUrl('/login');
    });

  }
}
  ngOnInit() {
  }
}
