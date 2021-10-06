import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required)
  });

  firebaseErrorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  loginUser() {
    if (this.loginForm.invalid)
      return;

    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
      if (result == null) {
        console.log('logging in...');
        this.router.navigate(['/blocks']).then();
      }
      else if (!result.isValid) {
        console.log('login error', result);
        this.firebaseErrorMessage = result.message;
      }
    });
  }
}
