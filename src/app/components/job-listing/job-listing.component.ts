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
    // this.sharedService.fullTime.subscribe((isFulltime: boolean) => {
    //   this.isFullTime = this.sharedService.fullTime.value;
    //   if (this.isFullTime) {
    //     this.onShowFullTime();
    //   } else {
    //     this.getData();
    //   }
    // });
    this.dataService.jobs.subscribe((job) => {
      this.jobs = this.dataService.jobs.getValue();
    });
    this.queryParamSubscription = this.route.queryParams.subscribe((params) => {
      const { title, location, fullTime } = params;
      if (!this.dataService.searching.getValue()) {
        // this.dataService.searching.next(false);
        if (title || location || fullTime) {
          this.dataService.onFilter(title, location, fullTime);
          return
        }
        this.getData();
      }
    });
  }

  getData(): void {
    this.jobs = this.dataService.getData().getValue();
  }

  // onShowFullTime() {
  //   this.jobs = this.dataService.onShowFullTime();
  // }

  onOpenJobDetails(job: Job) {
    this.sharedService.setJobDetails(job);
    this.dataService.searching.next(false);
    this.router.navigate(['/job', job.company, job.id]);
  }
}
