import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RegisterPage } from './register.page';
import { LoginPage } from './login.page';

@NgModule({
  declarations: [
    RegisterPage,
    LoginPage
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    } ]
})
export class AuthModule { }
