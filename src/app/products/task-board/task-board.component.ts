import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from "@angular/forms";
import { MatTabChangeEvent } from '@angular/material';

export interface LabelData {
  label: string;
  value: string;
  data: any;
}

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  selectedTask = new FormControl();
  todoCount: number = 0;
  inProgCount: number = 0;
  completedCount: number = 0;
  blockedCount: number = 0;

  /*
  /// TODO: 
        1. remove color as a property
            color should be calculated based on status + ???
        2. date
        3. numberOfMessages: number OR messages: any[]
          3a. Show message icon if there are no messages?
        4. change Title to title

        stretch goals:
          1. Refactor card to common component
          2. apply class to card based on status + ???
          3. apply colors in SCSS based on class

  */
  toDo = [
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "blue",
      numberOfMessages: 1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "blue",
      numberOfMessages: 1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "orange",
      numberOfMessages: 1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "orange",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "blue",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    }
  ];
  inProgress = [
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "blue",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "orange",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    }
  ];
  completed = [
    {
      status: "COMPLETE",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "green",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "COMPLETE",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "green",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "COMPLETE",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "green",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "COMPLETE",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "green",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg"]
    }
  ];
  blocked = [
    {
      status: "BLOCKED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "red",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "BLOCKED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "red",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "BLOCKED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "red",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "BLOCKED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "red",
      numberOfMessages:1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    }
  ];

  taskMetaData:LabelData[] = [
    {label:"TO-DO",value:"0", data: this.toDo},
    {label:"IN PROGRESS",value:"1", data: this.inProgress},
    {label:"COMPLETED",    value:"2", data: this.completed},
    {label:"BLOCKED",value:"3", data: this.blocked}
  ]

  public selectedIndex: number = 0;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'date',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/date.svg'));
    iconRegistry.addSvgIcon(
      'comments',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/comments.svg'));
      iconRegistry.addSvgIcon(
        'keyboard_arrow_down',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/keyboard_arrow_down.svg'));
  }


  ngOnInit() {
    let index:number = this.selectedIndex;
    if( !index ) index=0;
    this.updateTaskCanvas(index, 'onInit');
  }

  swapTasks(tabEvent:any) {
    if(tabEvent instanceof MatTabChangeEvent)
      this.updateTaskCanvas(tabEvent.index, 'tabEvent-MatTabChangeEvent');
    else
      this.updateTaskCanvas(tabEvent.value.value,'tabEvent');
  }
  
  updateTaskCanvas(index, eventType){
    console.log(eventType);
    console.log(index);
    this.selectedIndex = index;
    this.selectedTask.setValue(this.taskMetaData[index]);
    console.log(this.selectedTask);
  }
}
