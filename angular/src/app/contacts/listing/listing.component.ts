import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  contacts: Contact[];

  constructor(private appService: AppService, private router: Router) {
    this.getContactList();
  }

  ngOnInit(): void {
  }

  getContactList() {
    this.contacts = this.appService.getAllContacts();
  }

  deleteContact(contact: Contact) {
    this.appService.deleteContact(contact.id);
    this.getContactList();
  }

  viewContact(contact: Contact) {
    this.router.navigateByUrl('/contacts/edit/' + contact.id);
  }

  createContact() {
    this.router.navigateByUrl('/contacts/create');
  }

}
