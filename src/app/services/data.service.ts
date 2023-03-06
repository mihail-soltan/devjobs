import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from '../data.json';
import { Job } from '../job';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  titleFilter = new BehaviorSubject(''); //filter by job title, company or expertise
  locationFilter = new BehaviorSubject(''); //filter by location
  jobs = new BehaviorSubject<any[]>([]);
  searching = new BehaviorSubject<boolean>(false);
  private allJobs: any[] = data;
  getData() {
    this.jobs.next(this.allJobs.slice(0, 15));
    return this.jobs;
  }

  loadMore() {
    this.jobs.next(this.allJobs.slice(0, this.jobs.getValue().length + 15));
    return this.jobs;
  }
  onFilter(title: string = '', location: string = '', fullTime: boolean) {
    this.getData();

    // const filter = this.jobs
    // .getValue()
    const filter = this.allJobs.filter(
      (job) =>
        (job.company.toLowerCase().includes(title.toLowerCase()) ||
          job.position.toLowerCase().includes(title.toLowerCase())) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        (fullTime ? job.contract === 'Full Time' : job.contract.includes(''))
    );

    this.jobs.next(filter);
  }

  onGetJobDetails(id: string, company: string) {
    const job = this.allJobs.find(
      (job) => job.id === parseInt(id) && job.company === company
    );
    return job;
  }
}
