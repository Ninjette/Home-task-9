import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { HttpModule } from '@angular/http';
import 'rxjs/operator';

import { AppComponent }     from './app.component';
import { HeaderComponent }  from './../header/header.component';
import { listingComponent }  from './../listing/listing.component';
import { favouritesComponent }  from './../favourites/favourites.component';
import { AppRoutingModule } from '../../config/app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
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
