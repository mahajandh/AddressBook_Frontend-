import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // ✅ Import AppRoutingModule
import { ReactiveFormsModule } from '@angular/forms';
import { AddpersonComponent } from './components/addperson/addperson.component';
import { AddressbookComponent } from './components/addressbook/addressbook.component'; 
import { HttpClientModule } from '@angular/common/http';
// ✅ Import AddressBookComponent

@NgModule({
  declarations: [
    AppComponent,
    AddpersonComponent,
    AddressbookComponent // ✅ Add this
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // ✅ Make sure AppRoutingModule is imported here
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
