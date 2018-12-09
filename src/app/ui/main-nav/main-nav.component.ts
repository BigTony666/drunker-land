import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})

export class MainNavComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {

  }

  search() {
    // alert('search for ' + key + value);
  }

  setCondition(condition) {
    console.log(condition);
  }

}
