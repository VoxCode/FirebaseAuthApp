import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FirebaseAuthApp';
  user: any;

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      this.user = user;
    })
  }

  logout(): void {
    this.auth.signOut().then();
  }
}
