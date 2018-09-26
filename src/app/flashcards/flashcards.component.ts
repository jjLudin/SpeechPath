import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'flashcards',
    templateUrl: './flashcards.component.html',
    styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent {
    sound: string; index: number; lenOfWords: number;
    p: string[]; b: string[];
    Flashcards = []; flashcardKey: string; flashcardImg: string;

    // Inject the activated route
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // Initialization + This is where we grab the sound
        this.sound = this.route.snapshot.params.sound;
        this.index = 0;

        // Sounds and their words corresponding to their images
        this.p = ['Potato', 'Stamp', 'Ship', 'Apple', 'Dimple', 'Pants', 'Staples', 'Park', 'Pickle', 'Paint'];
        this.b = ['Bat', 'Beetle', 'Cab', 'Bus'];

        switch (this.sound) {
            case 'p':
                this.lenOfWords = this.p.length;
                break;
            case 'b':
                this.lenOfWords = this.b.length;
                break;
        }

        this.Flashcards = [
            {
                key: 'Potato',
                image: '../../assets/img/flashcards/' + this.sound + '/image1.jpg'
            },
            {
                key: 'Stamp',
                image: '../../assets/img/flashcards/' + this.sound + '/image2.jpg'
            },
            {
                key: 'Ship',
                image: '../../assets/img/flashcards/' + this.sound + '/image3.jpg'
            },
            {
                key: 'Apple',
                image: '../../assets/img/flashcards/' + this.sound + '/image4.jpg'
            },
            {
                key: 'Dimple',
                image: '../../assets/img/flashcards/' + this.sound + '/image5.jpg'
            },
            {
                key: 'Pants',
                image: '../../assets/img/flashcards/' + this.sound + '/image6.jpg'
            },
            {
                key: 'Staples',
                image: '../../assets/img/flashcards/' + this.sound + '/image7.jpg'
            },
            {
                key: 'Park',
                image: '../../assets/img/flashcards/' + this.sound + '/image8.jpg'
            },
            {
                key: 'Pickle',
                image: '../../assets/img/flashcards/' + this.sound + '/image9.jpg'
            },
            {
                key: 'Paint',
                image: '../../assets/img/flashcards/' + this.sound + '/image10.jpg'
            }
        ];

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