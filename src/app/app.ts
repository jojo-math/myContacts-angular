import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CoolContacts } from "./components/cool-contacts/cool-contacts";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoolContacts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myContacts');
  constructor(public router: Router){}
}
