import { Component, Input, OnInit, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  searchPlaceholder: string = 'Filter by title, companies, expertise...';

  filterDialogOpen: boolean = false;

  constructor(
    private sharedService: SharedService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.setPlaceholderText();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setPlaceholderText();
  }

  ngOnInit(): void {
    this.sharedService.fullTime.subscribe((fullTime: boolean) => {
      this.fullTime = this.sharedService.fullTime.value;
    });
  }

  onSearch() {
    this.dataService.searching.next(true);
    const jobFilters = {
      title: this.searchInput,
      location: this.locationInput,
      fullTime: this.fullTime,
    };
    const { title, location, fullTime } = jobFilters;
    this.router.navigate([], {
      queryParams: { title, location, fullTime },
      queryParamsHandling: 'merge',
    });
    this.dataService.onFilter(
      this.searchInput,
      this.locationInput,
      this.fullTime
    );
    this.searchInput = '';
    this.locationInput = '';
    this.fullTime = false;
    this.dataService.searching.next(false);
  }

  setPlaceholderText() {
    if (window.innerWidth <= 768) {
      this.searchPlaceholder = 'Filter by title...';
    } else {
      this.searchPlaceholder = 'Filter by title, companies, expertise...';
    }
  }


  onOpenFilterDialog() {
    this.filterDialogOpen = true;
    console.log(this.filterDialogOpen);
  }
}
