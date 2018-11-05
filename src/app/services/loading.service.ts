import { Injectable } from '@angular/core';
import { LoadingOverlayModalComponent } from '../components/modals/loading-overlay-modal/loading-overlay-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading: boolean;
  private loadingOverlayRef: MatDialogRef<LoadingOverlayModalComponent>;

  constructor(private dialog: MatDialog) { 
    this.isLoading = false;
  }

  public showLoading() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.loadingOverlayRef = this.dialog.open(LoadingOverlayModalComponent, {
        disableClose: true,
        width: '250px',
        height: '325px'
      });
  
      this.loadingOverlayRef.afterClosed().subscribe(result => {
        this.isLoading = false;
      });
    }
  }

  public dismissLoading() {
    if (this.isLoading) {
      this.loadingOverlayRef.close();
    }
  }
}
