import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { Job } from 'src/app/job';
import { Router } from '@angular/router';

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
    private sharedService: SharedService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getData();
    this.sharedService.darkmode.subscribe((mode: boolean) => {
      this.darkmode = this.sharedService.darkmode.value;
    });
    this.sharedService.fullTime.subscribe((isFulltime: boolean) => {
      this.isFullTime = this.sharedService.fullTime.value;
      if (this.isFullTime) {
        this.onShowFullTime()
      } else {
        this.getData();
      }
    });
  }

  getData(): void {
    this.jobs = this.dataService.getData();
  }

  onShowFullTime() {
    this.jobs = this.dataService.onShowFullTime()
  }

  onOpenJobDetails(job: Job) {
    // console.log(job)
    this.sharedService.setJobDetails(job)
    this.router.navigate(['/job', job.company, job.id]);
  }
}
