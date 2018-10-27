import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'flashcards',
    templateUrl: './flashcards.component.html',
    styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent {
    sound: string; index: number; lenOfWords: number; soundsList: string[];
    p: string[]; b: string[]; m: string[]; d: string[];
    n: string[]; t: string[]; k: string[]; g: string[];
    f: string[]; v: string[]; ch: string[]; j: string[];
    z: string[]; sh: string[]; th: string[]; w: string[];
    ng: string[]; y: string[]; h: string[]; r: string[];
    l: string[]; s: string[];
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
        this.m = ['Monkey', 'Moose', 'Dorm'];
        this.d = ['Dog', 'Dance', 'Chard'];
        this.n = ['Nickel', 'Nail', 'Den'];
        this.t = ['Tank', 'Tea', 'Cart'];
        this.k = ['Kite', 'Rock'];
        this.g = ['Garden', 'Glass'];
        this.f = ['Fan', 'Fly'];
        this.v = ['Violin', 'Vase'];
        this.ch = ['Chicken', 'Chick'];
        this.j = ['Juice', 'Jar'];
        this.z = ['Zoo', 'Zebra'];
        this.sh = ['Shark', 'Shoes'];
        this.th = ['Thunder', 'Bathtub'];
        this.w = ['Water', 'Wave'];
        this.ng = ['King', 'Sing'];
        this.y = ['Yolk', 'Boy'];
        this.h = ['Hair', 'Hawk'];
        this.r = ['Rabbit', 'Raven'];
        this.l = ['Lion', 'Lizard'];
        this.s = ['Saw', 'Sofa'];

        switch (this.sound) {
            case 'p':
                this.soundsList = this.p;
                this.lenOfWords = this.p.length;
                break;
            case 'b':
                this.soundsList = this.b;
                this.lenOfWords = this.b.length;
                break;
            case 'm':
                this.soundsList = this.m;
                this.lenOfWords = this.m.length;
                break;
            case 'd':
                this.soundsList = this.d;
                this.lenOfWords = this.d.length;
                break;
            case 'n':
                this.soundsList = this.n;
                this.lenOfWords = this.n.length;
                break;
            case 't':
                this.soundsList = this.t;
                this.lenOfWords = this.t.length;
                break;
            case 'k':
                this.soundsList = this.k;
                this.lenOfWords = this.k.length;
                break;
            case 'g':
                this.soundsList = this.g;
                this.lenOfWords = this.g.length;
                break;
            case 'f':
                this.soundsList = this.f;
                this.lenOfWords = this.f.length;
                break;
            case 'v':
                this.soundsList = this.v;
                this.lenOfWords = this.v.length;
                break;
            case 'ch':
                this.soundsList = this.ch;
                this.lenOfWords = this.ch.length;
                break;
            case 'j':
                this.soundsList = this.j;
                this.lenOfWords = this.j.length;
                break;
            case 'z':
                this.soundsList = this.z;
                this.lenOfWords = this.z.length;
                break;
            case 'sh':
                this.soundsList = this.sh;
                this.lenOfWords = this.sh.length;
                break;
            case 'th':
                this.soundsList = this.th;
                this.lenOfWords = this.th.length;
                break;
            case 'w':
                this.soundsList = this.w;
                this.lenOfWords = this.w.length;
                break;
            case 'ng':
                this.soundsList = this.ng;
                this.lenOfWords = this.ng.length;
                break;
            case 'y':
                this.soundsList = this.y;
                this.lenOfWords = this.y.length;
                break;
            case 'h':
                this.soundsList = this.h;
                this.lenOfWords = this.h.length;
                break;
            case 'r':
                this.soundsList = this.r;
                this.lenOfWords = this.r.length;
                break;
            case 'l':
                this.soundsList = this.l;
                this.lenOfWords = this.l.length;
                break;
            case 's':
                this.soundsList = this.s;
                this.lenOfWords = this.s.length;
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