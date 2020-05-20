import { Injectable } from '@angular/core';
import { Contact } from './contacts/contact.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  contactList: Contact[] = [
    {
      id:1,
      fName:'Rupesh',
      lName: 'Yadav',
      email: 'imyrups@gmail.com',
      mobile: 7817824347,
      status: true
    }
  ];

  constructor() { }

  public addContact(contact) {
    const obj: any = {};
    obj.id = 2;
    obj.status = true;
    obj.fName = contact.fName;
    obj.lName = contact.lName;
    obj.email = contact.email;
    obj.mobile = contact.mobile;
    this.contactList.push(obj);
  }

  public deleteContact(id) {
    this.contactList.forEach((contact) => {
      if(contact.id === id) {
        contact.status = false;
      }
    });
  }

  public modifyContact(id, contact) {
    this.contactList.forEach((obj) => {
      if(obj.id === id) {
        obj.fName = contact.fName;
        obj.lName = contact.lName;
        obj.email = contact.email;
        obj.mobile = contact.mobile;
      }
    });
  }

  public getContact(id: number) {
    let obj;
    this.contactList.forEach((contact) => {
      if(contact.id === id) {
        obj = contact;
      }
    });
    return obj;
  }

  public getAllContacts() {
    return this.contactList;
  }
}
