import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent,
    JobListingComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
