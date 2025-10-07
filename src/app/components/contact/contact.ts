import { Component } from '@angular/core';
import { contacts } from '../../../../data/data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
    c0 = contacts[0];
}
