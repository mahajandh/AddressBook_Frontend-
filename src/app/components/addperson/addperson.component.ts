import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/addressbook.service';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.scss']
})
export class AddpersonComponent implements OnInit {
  personForm: FormGroup;
  cities: string[] = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'];
  states: string[] = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu'];

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private contactService: ContactService // ✅ Inject service
  ) {
    this.personForm = this.fb.group({
      fullname: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  ngOnInit(): void {}

  // 🟢 Submit Form Data to Backend
  onSubmit(): void {
    if (this.personForm.valid) {
      const newPerson = this.personForm.value;

      this.contactService.addContact(newPerson).subscribe({
        next: (response) => {
          console.log('Contact added:', response);
          alert('Person added successfully!');
          this.router.navigate(['/addressbook']); // ✅ Navigate back
        },
        error: (err) => {
          console.error('Error adding contact:', err);
          alert('Failed to add contact. Please try again.');
        }
      });
    }
  }

  onReset(): void {
    this.personForm.reset();
  }

  onClose(): void {
    this.router.navigate(['/addressbook']);
  }
}
