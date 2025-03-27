import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/addressbook.service';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss']
})
export class AddressbookComponent implements OnInit {
  persons: any[] = []; // Stores contacts

  constructor(private router: Router, private contactService: ContactService) {} // ✅ Inject ContactService

  ngOnInit(): void {
    this.loadPersons();
  }

  // 🟢 Load contacts from backend
  loadPersons(): void {
    this.contactService.getAllContacts().subscribe({
      next: (data) => {
        console.log('Fetched contacts:', data); // ✅ Debugging
        this.persons = data;
      },
      error: (err) => console.error('Error fetching contacts:', err)
    });
  }

  // 🟢 Navigate to Add Person
  addPerson(): void {
    console.log('Navigating to Add Person');
    this.router.navigate(['/addperson']);
  }
}
