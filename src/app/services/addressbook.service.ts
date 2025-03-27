import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ Ensures the service is available throughout the app
})
export class ContactService {
  private baseUrl = 'http://localhost:8080/api/contacts'; // ✅ Backend API URL

  constructor(private http: HttpClient) {}

  // 🟢 GET all contacts
  getAllContacts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // // 🟢 GET contact by ID
  // getContactById(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  // 🟢 POST - Add a new contact
  addContact(contact: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, contact, this.httpOptions());
  }

  // // 🟢 PUT - Update an existing contact
  // updateContact(id: number, contact: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/update/${id}`, contact, this.httpOptions());
  // }

  // // 🟢 DELETE - Remove a contact by ID
  // deleteContact(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`);
  // }

  // 🟢 Set headers for JSON requests
  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
