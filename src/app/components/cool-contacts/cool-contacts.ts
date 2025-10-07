import { Component } from '@angular/core';
import { Contact } from "../contact/contact";
import { donnees } from '../../../../data/data';

@Component({
  selector: 'app-cool-contacts',
  imports: [Contact],
  templateUrl: './cool-contacts.html',
  styleUrl: './cool-contacts.scss'
})
export class CoolContacts {
    public dContacts = donnees;
}
