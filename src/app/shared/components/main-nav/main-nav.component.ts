import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WineServiceClient} from '../../../../services/wine.service.client';
import { Wine } from '../../../modules/wines/shared/wine.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})

export class MainNavComponent implements OnInit {
  key: string;
  value: string;
  @Output() searchWines: EventEmitter<Wine[]> = new EventEmitter();

  conditions = [
    {name: 'Name'},
    {name: 'Vintage'},
    {name: 'Color'},
    {name: 'Region'},
    {name: 'Appellation'},
    {name: 'Country'}
  ];

  constructor(
    private searchService: WineServiceClient
  ) { }

  ngOnInit() {
    this.key = '';
    this.value = '';
  }

  search(key: string, value: string) {
    switch (key) {
      case 'Name': {
        if (value !== '') {
          this.searchService.getWinesByName(value)
            .then(response => this.searchWines.emit(response));
        }
        break;
      }
      case 'Vintage': {
        if (value !== '') {
          this.searchService.getWinesByVintage(value)
            .then(response => this.searchWines.emit(response));
        }
        break;
      }
      case 'Color': {
        if (value !== '') {
          this.searchService.getWinesByColor(value)
            .then(response => this.searchWines.emit(response));
        }
        break;
      }
      case 'Region': {
        if (value !== '') {
          this.searchService.getWinesByRegion(value)
            .then(response => this.searchWines.emit(response));
        }
        break;
      }
      case 'Appellation': {
        if (value !== '') {
          this.searchService.getWinesByAppellation(value)
            .then(response => this.searchWines.emit(response));
        }
        break;
      }
      case 'Country': {
        if (value !== '') {
          this.searchService.getWinesByCountry(value)
            .then(response => this.searchWines.emit(response));
        }
        break;
      }
      default: {
        this.searchWines.emit(null);
        break;
      }
    }
  }

}
