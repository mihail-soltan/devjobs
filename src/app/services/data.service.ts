import { Injectable } from '@angular/core';
import data from '../data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return data;
  }
}
