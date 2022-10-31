import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appForms';
  URL = 'countrie';
  private readonly sessionStorageKey = 'isAllowed'
  constructor(private router: Router) {}

  goToCities() {
    this.router.navigate(['countrie']);
  }

  gotoBack() {
    this.router.navigate(['../']);
  }

  signIn(){
    sessionStorage.setItem(this.sessionStorageKey,'true');
  }

  signOut(){
    sessionStorage.setItem(this.sessionStorageKey, 'false');
  }
}
