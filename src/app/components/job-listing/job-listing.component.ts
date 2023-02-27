import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { Job } from 'src/app/job';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute
  ) {}
  queryParamSubscription: any;

  ngOnInit(): void {
    this.getData();
    this.sharedService.darkmode.subscribe((mode: boolean) => {
      this.darkmode = this.sharedService.darkmode.value;
    });
    this.dataService.jobs.subscribe((job) => {
      this.jobs = this.dataService.jobs.getValue();
    });
    this.queryParamSubscription = this.route.queryParams.subscribe((params) => {
      const { title, location, fullTime } = params;
      if (!this.dataService.searching.getValue()) {
        if (title || location || fullTime) {
          const bool = this.stringToBoolean(fullTime);
          console.log(bool);
          this.dataService.onFilter(title, location, bool);
          // return;
        } 
        else {
          this.getData();
        }
      }
    });
  }

  getData(): void {
    this.jobs = this.dataService.getData().getValue();
  }

  onOpenJobDetails(job: Job) {
    this.sharedService.setJobDetails(job);
    this.router.navigate(['/job', job.company, job.id]);
  }

  stringToBoolean(str: string) {
    if (str.toLowerCase() === 'true') {
      return true;
    } else if (str.toLowerCase() === 'false') {
      return false;
    } else {
      throw new Error(`Invalid string value: ${str}`);
    }
  }
}
