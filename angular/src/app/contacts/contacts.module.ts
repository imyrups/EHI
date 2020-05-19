import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ListingComponent, CreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
