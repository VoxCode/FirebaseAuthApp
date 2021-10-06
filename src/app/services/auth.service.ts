import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GithubAuthProvider } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean = false;

  constructor(private router: Router, private auth: AngularFireAuth) {
    this.auth.onAuthStateChanged((user) => {
      this.userLoggedIn = !!user;
    }).then();
  }

  signupUser(user: any): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        result.user?.sendEmailVerification();
      })
      .catch(error => {
        console.log('Auth Service: signup error', error);
        return { isValid: false, message: error.message };
      });
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Auth Service: login success')
      }).catch(error => {
        console.log('Auth Service: login error, ' + error.code + ' ' + error )
        return {isValid: false, message: error.message}
      })
  }

  loginGitHub(): Promise<any> {
    return this.auth.signInWithPopup(new GithubAuthProvider())
      .then(() => {
        console.log('Auth Service: login success')
      })
      .catch(error => {
        console.log('Auth Service: login error, ' + error.code + ' ' + error )
        return {isValid: false, message: error.message}
      })

  }
}
