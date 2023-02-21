import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  darkmode: boolean = false;
  showSearch: boolean = false;
  @ViewChild('themeToggle', {static: true}) themeToggle?: ElementRef<HTMLInputElement>;
  constructor(public sharedService: SharedService, private router: Router ) { }
  ngOnInit(): void {
    this.sharedService.darkmode.subscribe((mode: boolean) => {
      this.darkmode = this.sharedService.darkmode.value;
    })
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        if (event.url.includes("job")) {
          this.showSearch = false;
        } else {
          this.showSearch = true;
        }
      }
    })
  }

  toggleTheme(e: any) {
    this.sharedService.toggleTheme();
  }
}
