import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job } from '../job';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  currentTheme = localStorage.getItem('darkmode');
  darkmode = new BehaviorSubject(eval(this.currentTheme!));
  fullTime = new BehaviorSubject(false);

  private jobDetails: any;

  constructor() {}

  toggleTheme() {
    if (this.darkmode.value === false) {
      this.darkmode.next(true);
      localStorage.setItem('darkmode', 'true');
    } else {
      this.darkmode.next(false);
      localStorage.setItem('darkmode', 'false');
    }
  }

  onFullTimeChange() {
    if (this.fullTime.value === false) {
      this.fullTime.next(true);
    } else {
      this.fullTime.next(false);
    }
    console.log(this.fullTime.value);
  }

  setJobDetails(job: Job) {
    this.jobDetails = job;
  }

  getJobDetails() {
    return this.jobDetails
  }
}
