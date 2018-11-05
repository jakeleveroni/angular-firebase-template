import { Component, Inject } from '@angular/core';
import { AuthenticationService } from 'src/app/services/firestore/firebase-authentication.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateAccountData } from '../create-account-modal/create-account-modal.component';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  constructor(private authServ: AuthenticationService, 
    public dialogRef: MatDialogRef<LoginModalComponent>,
    @Inject(MAT_DIALOG_DATA) public credentials: CreateAccountData,
    private loadingServ: LoadingService) { 

  }

  public login(): Promise<any> {
    if (this.credentials.email && this.credentials.password) {
      this.loadingServ.showLoading();

      return this.authServ.login(this.credentials.email, this.credentials.password).then(res => {
        this.close();
      }).catch(err => {
        console.error(`Could not login ${err}`)
      })
      .then(res => {
        this.loadingServ.dismissLoading();
      })     
    } else {
      return Promise.reject('Email and password must be specified.');
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
