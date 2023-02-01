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
  currentTheme: string = '';
  ngOnInit(): void {
    this.sharedService.theme.subscribe((theme: string) => {
     this.currentTheme = theme;
    })
  }

  toggleTheme(e: any) {
    document.body.classList.toggle('dark-theme');
    this.sharedService.toggleTheme();
    console.log(this.currentTheme);
  }
}
