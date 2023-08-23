import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  id = 1;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) {

    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
}
