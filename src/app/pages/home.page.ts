import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  template: `
  <div class="body">
    <app-nav></app-nav>
    <router-outlet>
    </router-outlet>
  </div>
  `,
  styleUrls: ['./pages.scss']
})
export class Homepage {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['/movies']);
  }

}
