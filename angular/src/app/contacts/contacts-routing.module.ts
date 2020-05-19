import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [{
    path: '', pathMatch: 'full', redirectTo: 'listing'
}, {
    path: 'listing', component: ListingComponent
}, {
    path: 'create', component: CreateComponent
}, {
    path: 'edit/:id', component: CreateComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule { }
