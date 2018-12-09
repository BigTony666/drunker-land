import { Component } from '@angular/core';
import {WineServiceClient} from '../services/wine.service.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'drunker-land';

  // result = WineServiceClient.
}
