import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent {
  constructor(private authService: AuthService) {
  }

  doLogOut() {
    this.authService.logOut();
  }
}
