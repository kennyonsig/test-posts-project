import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {

  }

  logOut() {
    this.router.navigate(['/sign-in'])
      .then((success) => {
          console.log(success);
        },
        (reason) => {
          console.error((reason));
        });
  }
}
