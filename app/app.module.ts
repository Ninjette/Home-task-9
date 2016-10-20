import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';

import { AppComponent }     from './app.component';
import { HeaderComponent }  from './header.component';
import { listingComponent }  from './listing.component';
import { favouritesComponent }  from './favourites.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
     AppComponent,
     HeaderComponent,
     listingComponent,
     favouritesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
