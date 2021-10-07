import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup = new FormGroup({
    'email': new FormControl('', [Validators.email, Validators.required]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  firebaseErrorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  signup(): void {
    if (this.signupForm.invalid) return;

    this.authService.signupUser(this.signupForm.value).then((result) => {
      if (result == null) {
        this.router.navigate(['/blocks']).then();
      }
      else if (!result.isValid) {
        this.firebaseErrorMessage = result.message;
        alert(this.firebaseErrorMessage)
      }
    });
  }

  get email(): any { return this.signupForm.get('email'); }
  get password(): any { return this.signupForm.get('password'); }
}
