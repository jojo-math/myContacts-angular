import { Component } from '@angular/core';
import { Contact } from '../../components/contact/contact';
import { donnees } from '../../../../data/data';

@Component({
  selector: 'app-contacts',
  imports: [Contact],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {
  public contactList = donnees;
}
