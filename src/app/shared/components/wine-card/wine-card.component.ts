import {Component, Input, OnInit} from '@angular/core';
import {AppConfig} from '../../../configs/app.config';
import {WineService} from '../../../modules/wines/shared/wine.service';
import {Wine} from '../../../modules/wines/shared/wine.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss']
})
export class WineCardComponent implements OnInit {

  @Input() wine: Wine;

  canVote: boolean;

  constructor(private wineService: WineService,
              private router: Router) {
    this.canVote = WineService.checkIfUserCanVote();
  }

  ngOnInit() {
  }

  like(wine: Wine): Promise<void> {
    if (this.canVote) {
      wine.like();
      return this.wineService.updateWine(wine);
    }
  }

  seeWineDetails(wine): void {
    if (wine.default) {
      this.router.navigate([AppConfig.routes.wines + '/' + wine.id]);
    }
  }

}
