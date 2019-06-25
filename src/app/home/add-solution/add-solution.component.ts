import { Component, OnInit, Input } from '@angular/core';
import {RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-add-solution',
    templateUrl: './add-solution.component.html',
    styleUrls: ['./add-solution.component']
})
export class AddSolutionComponent implements OnInit {

    tileNames = [
        {
            "image": "../../assets/png/addSolution.png",
            "image_id": "addSolution.png",
            "title": "Solution",
            "subtitle": "",
            "status": "Add new",
            "button_title": " DISCOVER",
            "destination": "5"
        },
        {
            "image": "../../assets/png/rewardsCard.png",
            "image_id": "rewardsCard.png",
            "title": "Rewards Card",
            "subtitle": "",
            "status": "Status: Completed",
            "button_title": "VIEW",
            "destination": "4"
        },
        {
            "image": "../../assets/png/pinacleSolutionTile.png",
            "image_id": "pinacleSolution.png",
            "title": "PINACLE",
            "subtitle": "For your growing business",
            "status": "Status: Not Yet Started",
            "button_title": "BEGIN",
            "destination": "0"
        },
        {
            "image": "../../assets/png/commericalLoan.png",
            "image_id": "commericalLoan.png",
            "title": "Commercial Loan",
            "subtitle": "",
            "status": "Status: In Progress",
            "button_title": "CONTINUE",
            "destination": "0"
        },
        {
            "image": "../../assets/png/commericalLoan.png",
            "image_id": "commericalLoan.png",
            "title": "Commercial Loan",
            "subtitle": "",
            "status": "Status: In Progress",
            "button_title": "CONTINUE",
            "destination": "0"
        },
        {
            "image": "../../assets/png/rewardsCard.png",
            "image_id": "rewardsCard.png",
            "title": "Rewards Card",
            "subtitle": "",
            "status": "Status: Completed",
            "button_title": " VIEW",
            "destination": "4"
        },
        {
            "image": "../../assets/png/commericalLoan.png",
            "image_id": "commericalLoan.png",
            "title": "Commercial Loan",
            "subtitle": "",
            "status": "Status: In Progress",
            "button_title": "CONTINUE",
            "destination": "0"
        },
        {
            "image": "../../assets/png/pinacleSolutionTile.png",
            "image_id": "pinacleSolution.png",
            "title": "PINACLE",
            "subtitle": "For your growing business",
            "status": "Status: Not Yet Started",
            "button_title": "BEGIN",
            "destination": "0"
        }
    ];

    constructor(private router:Router, private route: Router) {
        this.router.urlUpdateStrategy='eager';
        this.router.onSameUrlNavigation='ignore';
    }

    ngOnInit() {
    }

    next_screen(destination) {

       // this.route.navigateByUrl(item.destination);
       if(destination<5)    
        this.router.navigate(['prospect','solutions'],{ queryParams: { index: destination } });
       else 
        this.router.navigate(['solutions-catalog']);
    }

}
