import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { ActivatedRoute, Routes, RouterModule,Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';


export interface LabelData {
  label: string;
  value: string;
  svg_on:string;
  svg_off:string;
  svg: string;
  path:string;
}


@Component({
  selector: 'app-solution-tabs',
  templateUrl: './solution-tabs.component.html',
  styleUrls: ['./solution-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SolutionTabsComponent implements OnInit {
  selectedTab = new FormControl();
  tabMetaData:LabelData[] = [
    {label:"MY TASKS",value:"0",svg_on:"mytasks-on.svg",  svg_off:"mytasks-off.svg",  svg: "", path:"my-tasks"},
    {label:"TIMELINE",value:"1",svg_on:"timeline-on.svg", svg_off:"timeline-off.svg", svg: "", path:"timeline" },
    {label:"CREW",    value:"2",svg_on:"crew-on.svg",     svg_off:"crew-off.svg",     svg: "", path:"crew"},
    {label:"SOLUTION",value:"3",svg_on:"solution-on.svg", svg_off:"solution-off.svg", svg: "", path:"solution"},
    {label:"ACTIVITY",value:"4",svg_on:"activity-on.svg", svg_off:"activity-off.svg", svg: "", path:"activity"},
  ]

  public selectedIndex: number = 0;

  
  assetsPath: string = "../../../assets/icons/";

  constructor( private route: ActivatedRoute, private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    
    this.router.urlUpdateStrategy='eager';
    this.router.onSameUrlNavigation='ignore';

    for(let element of this.tabMetaData) {
      iconRegistry.addSvgIcon(element.svg_on,sanitizer.bypassSecurityTrustResourceUrl(this.assetsPath + element.svg_on ));
      iconRegistry.addSvgIcon(element.svg_off,sanitizer.bypassSecurityTrustResourceUrl(this.assetsPath + element.svg_off));
      
    };

  
}

  ngOnInit() {

    var index = this.route.snapshot.queryParamMap.get('index');
    if( !index )index='0';
    this.resetTabIcons();
    this.updateCanvas(index);
  }



swapTabs(tabEvent:any){
  this.resetTabIcons();

  if(tabEvent instanceof MatTabChangeEvent)
    this.updateCanvas(tabEvent.index);
  else
    this.updateCanvas(tabEvent.value.value);
  
}

updateCanvas(index){
  this.selectedTab.setValue(this.tabMetaData[index]);
  this.selectedIndex = index;
  this.tabMetaData[index].svg = this.tabMetaData[index].svg_on;
  this.navigate( this.tabMetaData[index].path);   

}

navigate(route:string){
  try{
    
    this.router.navigate(['prospect','solutions',route], {skipLocationChange:true});
  }catch(err){
    // console.log(err);
  }
}

  
  resetTabIcons(){

    this.tabMetaData.forEach(element => {
        element.svg = element.svg_off;
      
    });

  }
}
