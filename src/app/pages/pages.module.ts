import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MoviesPage } from './movie.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MoviesPage
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BrowserModule
  ]
})
export class PagesModule { }
