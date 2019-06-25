import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-secondary-banner',
  templateUrl: './secondary-banner.component.html',
  styleUrls: ['./secondary-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecondaryBannerComponent implements OnInit {

  solutionMenuOption: string="Solution Hub";


  constructor(private router:Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    this.router.urlUpdateStrategy='eager';
    this.router.onSameUrlNavigation='ignore';
    iconRegistry.addSvgIcon(
      'dropdown',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/dropdown.svg'));
   }

  ngOnInit() {
  }

swapViews(tabEvent){
  if(tabEvent.index===0){
    this.navigate('app-solution');
  }

  if(tabEvent.index===1){
    this.navigate('crew');
  }
  if(tabEvent.index===2){
    this.navigate('activity');
  }
}

navigate(route:string){
  try{
    
    this.router.navigate(['prospect','home',route], {skipLocationChange:true});
  }catch(err){
    // console.log(err);
  }
}

solutionMenuOptionChanged(event){
  let option = event.value;
  // console.log(option);
  if(option==0){
    this.solutionMenuOption = "Solution Hub";
    this.navigate('app-solution');
  }

  if(option==1){
    this.solutionMenuOption = "Crew";
    this.navigate('crew');
  }
  if(option==2){
    this.solutionMenuOption = "Activity";
    this.navigate('activity');
  }

}


}
