import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-loading-overlay-modal',
  templateUrl: './loading-overlay-modal.component.html',
  styleUrls: ['./loading-overlay-modal.component.css']
})
export class LoadingOverlayModalComponent {

  constructor(public dialogRef: MatDialogRef<LoadingOverlayModalComponent>) {
  }


  close(): void {
    this.dialogRef.close();
  }
}
