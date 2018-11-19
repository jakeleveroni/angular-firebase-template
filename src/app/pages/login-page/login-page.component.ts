import { Component, OnInit } from '@angular/core';
import { CreateAccountData, CreateAccountModalComponent } from 'src/app/components/modals/create-account-modal/create-account-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AuthenticationService } from 'src/app/services/firestore/firebase-authentication.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public credentials: CreateAccountData

  constructor(private dialog: MatDialog, private authServ: AuthenticationService,
    private router: Router, private loadingServ: LoadingService) {
    this.credentials = {
      email: null,
      password: null
    }
  }

  ngOnInit() {
  }

  public login() {
    this.loadingServ.showLoading();
    this.authServ.login(this.credentials.email, this.credentials.password)
      .then(() => {
        this.router.navigate(['home']).catch(err => console.log(err));
      })
      .catch(err => console.error(err))
      .then(() => this.loadingServ.dismissLoading());
  }

  public createAccount() {
    const dialogRef = this.dialog.open(CreateAccountModalComponent, {
      width: '75%',
      data: {email: this.credentials.email, password: this.credentials.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('modal closed', result)
    });
  }
}
