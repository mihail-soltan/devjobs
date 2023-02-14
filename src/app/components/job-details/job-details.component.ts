import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/job';
// import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  darkmode: boolean = false;
  constructor(private sharedService: SharedService ) { }
  
  job!: Job;
  ngOnInit(): void {
    this.job = this.sharedService.getJobDetails()
    console.log(this.job)
    this.sharedService.darkmode.subscribe((mode: boolean) => {
      this.darkmode = this.sharedService.darkmode.value;
    });
  }

}
