import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './home.page';
import { MoviesPage } from './movie.page';

const routes: Routes = [
  {
    path: "",
    component: Homepage,
    children: [
      {
        path: 'movies',
        component: MoviesPage
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
