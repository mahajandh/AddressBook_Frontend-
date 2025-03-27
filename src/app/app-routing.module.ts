import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressbookComponent } from './components/addressbook/addressbook.component';
import { AddpersonComponent } from './components/addperson/addperson.component';

const routes: Routes = [
  { path: '', redirectTo: 'addressbook', pathMatch: 'full' }, // Default route
  { path: 'addressbook', component: AddressbookComponent },
  { path: 'addperson', component: AddpersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
