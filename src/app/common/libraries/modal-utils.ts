import { MatDialogConfig } from '@angular/material';
import { Breakpoint } from './breakpoint';

export class ModalMetadata{

  private static SMALL_PANEL_CLASS:string = "custom-small-dialog-panel";
  private static ALL_OTHER_PANEL_CLASS:string = "custom-dialog-panel";

    constructor(){

    }
    
  public static getPosition(modalHeight:any){
   var  windowHeight = window.innerHeight;
   var topPadding = (windowHeight *.4) - (.5*modalHeight);
  // console.log("Window Height: "+windowHeight+" Popup Height: "+modalHeight+ " - Padding: "+topPadding);
    return topPadding;
  }

  public static getDialogConfig(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.backdropClass= "backdrop";
    // console.log("Is Small? "+Breakpoint.isSmall());
    dialogConfig.panelClass= Breakpoint.isSmall()?"custom-small-dialog-panel":"custom-dialog-panel";
    dialogConfig.autoFocus=true;
    return dialogConfig;
  }

} 