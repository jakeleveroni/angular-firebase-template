import { Component, Inject } from '@angular/core';
import { AuthenticationService } from 'src/app/services/firestore/firebase-authentication.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-create-account-modal',
  templateUrl: './create-account-modal.component.html',
  styleUrls: ['./create-account-modal.component.css']
})
export class CreateAccountModalComponent {
  constructor(private authServ: AuthenticationService,
    public dialogRef: MatDialogRef<CreateAccountModalComponent>,
    @Inject(MAT_DIALOG_DATA) public credentials: CreateAccountData,
    private router: Router, private loadingServ: LoadingService) { 

  }

  public createAccount(): Promise<any> {
    if (this.credentials.email && this.credentials.password) {
      this.loadingServ.showLoading();

      return this.authServ.createAccount(this.credentials.email, this.credentials.password).then(res => {
        this.close();
        this.router.navigate(['home']).catch(err => console.error(`could not navigate home ${err}`));
      }).catch(err => {
        console.error(`Could not create account ${err}`)
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

export interface CreateAccountData {
  email: string;
  password: string;
}