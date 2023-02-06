import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() darkmode: boolean = false;
  searchInput: string = '';
  locationInput: string = '';
  fullTime: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    console.log(this.darkmode);
    this.sharedService.fullTime.subscribe((fullTime: boolean) => {
      this.fullTime = this.sharedService.fullTime.value;
    });
  }

  onFullTimeChange() {
    this.sharedService.onFullTimeChange();
  }
}
