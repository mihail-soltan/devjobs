import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'devjobs';
  jobs: any[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData():void {
    this.jobs = this.dataService.getData();
    console.log(this.jobs)
  }
}
