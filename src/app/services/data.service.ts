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

  getData() {
    this.jobs.next(data);
    return this.jobs;
  }

  onFilter(title: string = '', location: string = '', fullTime: boolean) {
    this.getData();

    const filter = this.jobs.getValue().filter(
      (job) =>
        job.position.toLowerCase().includes(title.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        // (job.contract === 'Full Time' || !fullTime)
        (fullTime ? job.contract === 'Full Time' : job.contract.includes(''))
    );

    this.jobs.next(filter);
  }
}
