import { Routes } from '@angular/router';
import { Contact } from './components/contact/contact';
import { Apropos } from './views/apropos/apropos';
import { CoolContacts } from './components/cool-contacts/cool-contacts';
import { Contacts } from './views/contacts/contacts';
import { App } from './app';

export const routes: Routes = [
    {path:'contact', component: Contact},
    {path:'apropos', component: Apropos},
    {path:'cool-contacts', component: CoolContacts},
    {path:'contacts', component:Contacts}
];
