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
      }
    }
  }

}
