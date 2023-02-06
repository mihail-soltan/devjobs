import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
})
export class JobListingComponent implements OnInit {
  jobs: any[] = [];
  darkmode: boolean = false;
  isFullTime: boolean = false;

  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.sharedService.darkmode.subscribe((mode: boolean) => {
      this.darkmode = this.sharedService.darkmode.value;
    });
    this.sharedService.fullTime.subscribe((isFulltime: boolean) => {
      this.isFullTime = this.sharedService.fullTime.value;
    });
  }

  getData(): void {
    this.jobs = this.dataService.getData()
  }

  onShowFulltime() {
    this.jobs = this.jobs.filter((job) => job.contract === 'Full Time')
    // console.log("lmao")
    // this.jobs = this.dataService.onShowFullTime()
  }
}
