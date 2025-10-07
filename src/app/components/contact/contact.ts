import { Component, EventEmitter, Input, Output } from '@angular/core';
import { donnees } from '../../../../data/data';

interface contact {
  id:number,
  nom:string,
  prenom:string,
  numTel:string,
  adresse:string,
  genre:string,
  salaire:number

}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact  {
    @Input() contactItem!:contact;
    @Output() salaire2000 : EventEmitter<number> = new EventEmitter<number>();


}
