import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;
  public wrong: string;

  constructor(private router: Router) {

    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', Validators.required),
    });

  }

  ngOnInit(): void {
  }

  logIn(): void {
    let get_email = sessionStorage.getItem('email');
    let get_pass = sessionStorage.getItem('password');
    if (this.myForm.controls.email.value === get_email && this.myForm.controls.password.value === get_pass) {
      this.router.navigateByUrl('home');
    }
    this.wrong = "Wrong Email or Password";
  }


  toReg(): void {
    this.router.navigateByUrl('register');
  }

}
