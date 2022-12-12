import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./pages.scss']
})
export class Homepage {

  constructor() { }

  ngOnInit(): void {
  }
}
