import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }     from './app.component';
import { HeaderComponent }  from './header.component';
import { listingComponent }  from './listing.component';
import { favouritesComponent }  from './favourites.component';

const routes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: 'listing',  component: listingComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'favourites',     component: favouritesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/