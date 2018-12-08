import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, QuestionService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService]
})
export class AppComponent {
  currentUser: User;
  questions: any[];

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private service: QuestionService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.questions = this.service.getQuestions();
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
