import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  jobs: any[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData():void {
    this.jobs = this.dataService.getData();
  }

}
