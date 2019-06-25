import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  @ViewChild('briefcaseimg') breifcaseImage: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  
 public  getImageWidthPixels(event){

    const screenWidth = screen.width;

    var adjustedWidth = 0;
    var breakpointRangeInPixels =0;
    var imageRangeInPixels = 0;
    var baseImageWidthAtBreakpoint = 0;
    var currentPixelDiffAtBreakpoint = 0;

     if(screenWidth<320 || screenWidth>1599){
       return; //screen is too small or large to adjust

     }else if(screenWidth < 640){//small
   
       breakpointRangeInPixels = 639-320;
       imageRangeInPixels = 264-104;
       baseImageWidthAtBreakpoint = 104;
       currentPixelDiffAtBreakpoint =  screenWidth - 320;

     }else if(screen.width<1024){//medium

      breakpointRangeInPixels = 1023-640;
      imageRangeInPixels = 300-264;
      baseImageWidthAtBreakpoint = 264;
      currentPixelDiffAtBreakpoint = screenWidth - 640;

     }else if(screen.width<1200){//Large

      breakpointRangeInPixels = 1199-1024;
      imageRangeInPixels = 350-300;
      baseImageWidthAtBreakpoint = 300;
      currentPixelDiffAtBreakpoint = screenWidth - 1024;

     }else if(screen.width<1600){

      breakpointRangeInPixels = 1599-1200;
      imageRangeInPixels = 368-350;
      baseImageWidthAtBreakpoint = 350;
      currentPixelDiffAtBreakpoint = screenWidth - 1200;

     }

    adjustedWidth =  baseImageWidthAtBreakpoint +( currentPixelDiffAtBreakpoint * (imageRangeInPixels/breakpointRangeInPixels));
   
   const htmlElement = this.breifcaseImage.nativeElement as HTMLElement;
   htmlElement.style.width = adjustedWidth+"px";
   htmlElement.style.height = adjustedWidth+"px";
   
  }
}
