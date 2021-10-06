import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
