import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/firestore/firebase-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nova';
  constructor(private router: Router, private authServ: AuthenticationService) {
  }

  public gohome() {
    this.router.navigate(['home']).catch(err => console.error('could not navigate home'));
  }

  public gotoLogin() {
    this.router.navigate(['login']).catch(err => console.error('could not navigate login'));
  }

  public gotoAdmin() {
    this.router.navigate(['admin-dashboard']).catch(err => console.error('could not navigate admin dashboard'));
  }

  public logout() {
    this.authServ.logout().then(() => {
      console.log('logged out');
      this.router.navigate(['home']).catch(err => console.error('could not navigate login'));
    }).catch(err => {
      console.error(`could not logout ${err}`);
    })
  }
}
