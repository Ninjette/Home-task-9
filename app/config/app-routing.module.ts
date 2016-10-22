import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { listingComponent }  from './../components/listing/listing.component';
import { favouritesComponent }  from './../components/favourites/favourites.component';

const routes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: 'listing',  component: listingComponent },
  { path: 'favourites',     component: favouritesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}