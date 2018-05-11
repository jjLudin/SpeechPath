import { Component } from '@angular/core';
import { Sound } from './sound';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // List of sounds and phonetics for home UI grid
  sounds = [
    new Sound('p', '/p/'),    new Sound('b', '/b/'),    new Sound('m', '/m/'),    new Sound('d', '/d/'),
    new Sound('n', '/n/'),    new Sound('t', '/t/'),    new Sound('k', '/k/'),    new Sound('g', '/g/'),
    new Sound('f', '/f/'),    new Sound('v', '/v/'),    new Sound('ch', '/ch/'),  new Sound('j', '/j/'),
    new Sound('z', '/z/'),    new Sound('sh', '/sh/'),  new Sound('th', '/th/'),  new Sound('w', '/w/'),
    new Sound('ng', '/ng/'),  new Sound('y', '/y/'),    new Sound('h', '/h/'),    new Sound('r', '/r/'),
    new Sound('l', '/l/'),    new Sound('s', '/s/')
  ];
}
