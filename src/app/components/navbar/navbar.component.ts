import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(public sharedService: SharedService ) { }
  darkmode: boolean = false;
  ngOnInit(): void {
    this.sharedService.darkmode.subscribe((mode: boolean) => {
      this.darkmode = this.sharedService.darkmode.value;
    })
  }

  toggleTheme(e: any) {
    document.body.classList.toggle('dark-theme');
    this.sharedService.toggleTheme();
  }
}
