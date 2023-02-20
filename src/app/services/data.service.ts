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

  getData() {
    this.jobs.next(data);
    return this.jobs;
  }

  onShowFullTime() {
    return this.jobs.getValue().filter((job) => job.contract === 'Full Time');
  }

  onFilterByTitle(title: string) {
    this.getData()
    const filtered =this.jobs.getValue().filter((job) => job.position.includes(title));
    this.jobs.next(filtered)
  }

  setTitleFilter(title: string) {
    this.titleFilter.next(title);
  }

  onFilterByLocation(location: string) {
    this.getData()
    const filtered = this.jobs.getValue().filter((job) => job.location.includes(location))
  }

  onFilter(title: string = '', location: string = '', fullTime: boolean){
    if(fullTime){
      const fullTimeOnly = this.jobs.getValue().filter((job) => job.contract === 'Full Time');
      this.jobs.next(fullTimeOnly)
    }
    const filter = this.jobs.getValue().filter((job)=> job.position.includes(title) && job.location.includes(location))
    this.jobs.next(filter)
  }
}
