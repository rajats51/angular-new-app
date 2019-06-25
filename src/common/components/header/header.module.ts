import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { PostHeaderComponent }    from './post-header/post-header.component';
import { PreHeaderComponent }     from './pre-header/pre-header.component';
import { RouterModule }           from '@angular/router';


@NgModule({
    declarations: [PreHeaderComponent,PostHeaderComponent],
    imports: [
      CommonModule,
      RouterModule
          ],
      exports: [PreHeaderComponent,PostHeaderComponent]
  })
  export class HeaderModule { 

    public iconSrc:string = "assets/icons/Menu_On.svg";
} 