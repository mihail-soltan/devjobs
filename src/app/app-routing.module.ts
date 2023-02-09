import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';

const routes: Routes = [
  { path: '', component: JobListingComponent },
  {
    path: 'job',
    children: [
      {
        path: ':company/:id',
        component: JobDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
