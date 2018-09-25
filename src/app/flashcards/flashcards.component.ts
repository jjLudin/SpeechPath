import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'flashcards',
    templateUrl: './flashcards.component.html',
    styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent {
    sound: string;
    index: number;
    i: number;
    Flashcards = [];

    // Inject the activated route
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // This is where we grab the sound
        this.sound = this.route.snapshot.params.sound;
        this.index = 0;
        this.Flashcards = [
            {
                key: 'Potato',
                image: '../../assets/img/flashcards/' + this.sound + '/potato.jpg'
            },
            {
                key: 'Stamp',
                image: '../../assets/img/flashcards/' + this.sound + '/stamp.jpg'
            }
        ];
    }

    switchImage(i = 0) {
        this.index += i;
        return this.Flashcards[this.index].image;
    }
}