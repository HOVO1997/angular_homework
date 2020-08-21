import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private router: Router) {

    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(18)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(\\+\\d{1,3}[- ]?)?\\d{8}$')]),
      work: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm: new FormControl('', Validators.required),
    }, {validators: this.checkPasswords});

  }

  public checkPasswords(group: FormGroup): any {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirm').value;
    return pass === confirmPass ? null : {notSame: true};
  }

  ngOnInit(): void {
  }


  toLogin(): void {
    this.router.navigateByUrl('login');
  }

  Register(): void {
    this.router.navigateByUrl('login');
  }

}
