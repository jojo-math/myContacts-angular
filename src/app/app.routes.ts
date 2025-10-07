import { Routes } from '@angular/router';
import { Contact } from './components/contact/contact';
import { Apropos } from './views/apropos/apropos';
import { CoolContacts } from './views/cool-contacts/cool-contacts';

export const routes: Routes = [
    {path:'contact', component: Contact},
    {path:'apropos', component: Apropos},
    {path:'cool-contacts', component: CoolContacts}
];
