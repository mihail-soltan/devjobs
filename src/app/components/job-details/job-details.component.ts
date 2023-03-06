import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/job';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  darkmode: boolean = false;
  constructor(private sharedService: SharedService, private route: ActivatedRoute, private data: DataService) { }
  
  job: Job = {} as Job;
  ngOnInit(): void {
    // this.job = this.sharedService.getJobDetails()
      // console.log(this.job)
    this.onGetJobDetails()
    this.sharedService.darkmode.subscribe((mode: boolean) => {
      this.darkmode = this.sharedService.darkmode.value;
    });
  }

  onGetJobDetails() {
    const id = this.route.snapshot.params['id']
    const company = this.route.snapshot.params['company']
    this.job = this.data.onGetJobDetails(id, company)
  }
}
