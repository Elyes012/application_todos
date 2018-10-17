import { Component, OnInit } from '@angular/core';
import { Router,  NavigationStart } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('usertoken') ? true : false; /*pour changer login par logout*/
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
      }
    });
    this.ngOnInit();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
    this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
  }
}
