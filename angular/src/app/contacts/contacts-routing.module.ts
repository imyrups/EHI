import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';


const routes: Routes = [{
    path: '/', pathMatch: 'full', redirectTo: '/listing'
}, {
    path: '/listing', component: ListingComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule { }
