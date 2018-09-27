import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'flashcards',
    templateUrl: './flashcards.component.html',
    styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent {
    sound: string; index: number; lenOfWords: number; soundsList: string[];
    p: string[]; b: string[];
    Flashcards = []; flashcardKey: string; flashcardImg: string;

    // Inject the activated route
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // This is where we grab the sound
        this.sound = this.route.snapshot.params.sound;
        this.index = 0;
        this.soundsList = [];

        // Sounds and their words corresponding to their images
        this.p = ['Potato', 'Stamp', 'Ship', 'Apple', 'Dimple', 'Pants', 'Staples', 'Park', 'Pickle', 'Paint'];
        this.b = ['Bat', 'Beetle', 'Cab', 'Bus'];

        switch (this.sound) {
            case 'p':
                this.soundsList = this.p;
                this.lenOfWords = this.p.length;
                break;
            case 'b':
                this.soundsList = this.b;
                this.lenOfWords = this.b.length;
                break;
        }

        // Store the keys and images
        for (let s = 0; s < this.lenOfWords; s++) {
            this.Flashcards.push({
                key: this.soundsList[s],
                image: '../../assets/img/flashcards/' + this.sound + '/image' + (s + 1) + '.jpg'
            });
        }

        // Initial key and image
        this.flashcardKey = this.Flashcards[0].key;
        this.flashcardImg = this.Flashcards[0].image;
    }

    switchContext(i = 0) {
        this.index += i;
        // Lower bound
        if (this.index < 0) {
            this.index = 0;
        }
        // Upper bound
        if (this.index >= this.Flashcards.length) {
            this.index = this.Flashcards.length - 1;
        }
        this.flashcardKey = this.Flashcards[this.index].key;
        this.flashcardImg = this.Flashcards[this.index].image;
    }
}