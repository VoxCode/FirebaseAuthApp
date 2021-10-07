import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-git',
  templateUrl: './signup-git.component.html',
  styleUrls: ['./signup-git.component.css']
})
export class SignupGitComponent {

  firebaseErrorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  tryGitHubLogin(): void {
    this.authService.loginGitHub().then((result) => {
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
