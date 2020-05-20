import { Injectable } from '@angular/core';
import { Contact } from './contacts/contact.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  contactList: Contact[] = [
    {
      id:1,
      fName:'Chinaswami Mutthuswami Venugopal',
      lName: 'Iyer',
      email: 'vkiyer@gmail.com',
      mobile: 5678904567,
      status: true
    },
    {
      id:2,
      fName:'Raju',
      lName: 'Apte',
      email: 'araju@gmail.com',
      mobile: 5432108979,
      status: true
    },
    {
      id:3,
      fName:'Shyam',
      lName: 'Apte',
      email: 'shyamapte@gmail.com',
      mobile: 6321567891,
      status: true
    },
    {
      id:4,
      fName:'Baburav',
      lName: 'Apte',
      email: 'aptebabu@gmail.com',
      mobile: 2345678927,
      status: true
    },
    {
      id:5,
      fName:'Khadak',
      lName: 'Singh',
      email: 'singhk@gmail.com',
      mobile: 6341657809,
      status: true
    },
    {
      id:6,
      fName:'Anuradha',
      lName: 'Kashyap',
      email: 'anukashyap@gmail.com',
      mobile: 5643211238,
      status: true
    },
    {
      id:7,
      fName:'Nisha',
      lName: 'Jaiswal',
      email: 'njaiswal@gmail.com',
      mobile: 5735618729,
      status: true
    },
    {
      id:8,
      fName:'Munni',
      lName: 'Darji',
      email: 'dmunni@gmail.com',
      mobile: 6256734890,
      status: true
    },
    {
      id:9,
      fName:'Aditi',
      lName: 'Desai',
      email: 'imaditi@gmail.com',
      mobile: 4563213456,
      status: true
    },
    {
      id:10,
      fName:'Kabira',
      lName: 'Don',
      email: 'kabiraboss@gmail.com',
      mobile: 2649480273,
      status: true
    }
  ];

  count = 10;
  constructor() { }

  public addContact(contact) {
    const obj: any = {};
    obj.id = ++this.count;
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
