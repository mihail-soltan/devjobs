import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DataService } from 'src/app/services/data.service';
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

  constructor(
    private sharedService: SharedService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    console.log(this.darkmode);
    this.sharedService.fullTime.subscribe((fullTime: boolean) => {
      this.fullTime = this.sharedService.fullTime.value;
    });
  }

  onFullTimeChange() {
    // this.sharedService.onFullTimeChange();
    console.log(this.fullTime);
  }

  onSetTitleFilter(title: string) {
    this.dataService.setTitleFilter(title);
  }

  onSearch() {
    this.dataService.onFilter(
      this.searchInput,
      this.locationInput,
      this.fullTime
    );
    this.searchInput = '';
    this.locationInput = '';
    this.fullTime = false;
    // this.onSetTitleFilter(this.searchInput)
  }
}
