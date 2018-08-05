import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'flashcards',
    templateUrl: './flashcards.component.html',
    styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent {
    sound: string;

    // Inject the activated route
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // This is where we grab the sound
        this.sound = this.route.snapshot.params.sound;
    }
}

var images = ['potato.jpg', 'stamp.jpg'];
var index = 0;

function switchImage(i) {
    index += i;
    return images[index];
}