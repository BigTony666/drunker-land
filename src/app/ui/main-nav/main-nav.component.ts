import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Wine} from '../../../models/wine.model.client';
import {WineServiceClient} from '../../../services/wine.service.client';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})

export class MainNavComponent implements OnInit {
  @Output() wines = new EventEmitter<Wine[]>();

  conditions = [
    {name: 'Name'},
    {name: 'Vintage'},
    {name: 'Color'},
    {name: 'Region'},
    {name: 'Appellation'},
    {name: 'Country'}
  ];

  key = '';
  value = '';

  constructor(
    private searchService: WineServiceClient
  ) { }

  ngOnInit() {

  }

  search = (key, value) => {
    switch (key) {
      case 'Name': {
        if (value !== '') {
          this.searchService.getWinesByName(value)
            .then(response => this.wines.emit(response));
        }
        break;
      }
      case 'Vintage': {
        if (value !== '') {
          this.searchService.getWinesByVintage(value)
            .then(response => this.wines.emit(response));
        }
        break;
      }
      case 'Color': {
        if (value !== '') {
          this.searchService.getWinesByColor(value)
            .then(response => this.wines.emit(response));
        }
        break;
      }
      case 'Region': {
        if (value !== '') {
          this.searchService.getWinesByRegion(value)
            .then(response => this.wines.emit(response));
        }
        break;
      }
      case 'Appellation': {
        if (value !== '') {
          this.searchService.getWinesByAppellation(value)
            .then(response => this.wines.emit(response));
        }
        break;
      }
      case 'Country': {
        if (value !== '') {
          this.searchService.getWinesByCountry(value)
            .then(response => this.wines.emit(response));
        }
        break;
      }
      default: {
        this.wines.emit(null);
        break;
      }
    }
  }

}
