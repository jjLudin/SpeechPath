import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'prompt',
    templateUrl: './prompt.component.html',
    styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {
    sound: number;

    // Inject the activated route
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // This is where we grab the sound
        this.sound = this.route.snapshot.params.sound;
    }
}