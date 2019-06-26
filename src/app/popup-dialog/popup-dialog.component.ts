import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { PopupModal2Component } from './popup-modal2/popup-modal2.component';
import { PasswordSuccessPopupComponent } from '../password/password-success-popup/password-success-popup.component';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component']
})

export class PopupDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit() {
  }

  public openDialog(index: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    if (index === 1) {
      this.dialog.open(PopupModalComponent, {
        panelClass: 'sm-modal-dark',
        width: '550px',
        height: '950px',
      });
    } else {
      this.dialog.open(PopupModal2Component, {
        panelClass: 'sm-modal-white',
        width: '550px',
        height: '550px',
        hasBackdrop: false
      });
    }
  }

  successModal(){
    this.dialog.open(PasswordSuccessPopupComponent,{
      panelClass:'popup-overlay',
      disableClose: true,
      autoFocus:true,
    });
  }
}

