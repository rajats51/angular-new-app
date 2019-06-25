import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { PreFooterComponent }     from './pre-footer/pre-footer.component';
import { PostFooterComponent }    from './post-footer/post-footer.component';



@NgModule({
    declarations: [PreFooterComponent, PostFooterComponent],
    imports: [
      CommonModule
      ],
      exports: [PreFooterComponent, PostFooterComponent]
  })
  export class FooterModule { }