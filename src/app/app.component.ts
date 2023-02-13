import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'devjobs';
  darkmode: boolean = false;
  constructor(private sharedService: SharedService,) { }

  ngOnInit(): void {
    this.sharedService.darkmode.subscribe((mode: boolean) => {
      this.darkmode = this.sharedService.darkmode.value;
    });
    if(localStorage.getItem('darkmode') === null){
      localStorage.setItem('darkmode', 'false');
    }
  }
}
