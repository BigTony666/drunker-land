import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})

// @Component({
//   selector: 'app-nav-form',
//   template: `
//
//   `
// })

export class MainNavComponent implements OnInit {

  conditions = [
    {name: 'Name'},
    {name: 'Vintage'},
    {name: 'Color'},
    {name: 'Region'},
    {name: 'Appellation'},
    {name: 'Country'}
  ];
  constructor() { }

  ngOnInit() {
    // initPage();
    //
    // initData();
    //
    // initEvent();
  }

  setCondition(condition) {
    console.log(condition);
  }

}
