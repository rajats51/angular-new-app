import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progressbar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

    @Input() stepNames: string[] = [];
    sanitizedSteps: SafeHtml[] = [];
    @Input() currentStepIndex = 1;
    @Input() hasError = false;

    constructor(
        private _sanitizer: DomSanitizer
    ) {
    }

    ngOnInit() {
    }

    getHTML(step) {
        return this._sanitizer.bypassSecurityTrustHtml(step);
    }

    getProgressPercentage() {
        const percentage = this.currentStepIndex / (this.stepNames.length - 1) * 100;
        return percentage > 100 ? 100 : percentage;
    }
}
