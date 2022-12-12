import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

import { AppRoutingModule } from './app-routing.module';
import { Homepage } from './pages/home.page';
import { NavbarPage } from './pages/navbar.pages';


@NgModule({
    declarations: [
        AppComponent,
        Homepage,
        NavbarPage
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthModule,
        PagesModule,
        AppRoutingModule
    ]
})
export class AppModule { }
