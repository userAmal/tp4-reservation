import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reservation';
  isloggedin!: string | null;
  loggedUser!: string | null;

  ngOnInit() {
    this.isloggedin = localStorage.getItem('isloggedIn');
    this.loggedUser = localStorage.getItem('loggedUser');

    if (this.isloggedin !== "true" || !this.loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(this.loggedUser);
    }
  }

  constructor(public authService: AuthService, private router: Router) {}
  onLogout() {
    this.authService.logout();
  }
}
