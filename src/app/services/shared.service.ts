import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  theme = new BehaviorSubject('light-theme');

  constructor() { }

  toggleTheme() {
    if (this.theme.value === 'light-theme') {
      this.theme.next('dark-theme');
    } else {
      this.theme.next('light-theme');
    }
  }
}
