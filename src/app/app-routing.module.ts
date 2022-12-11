import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPage } from './auth/login.page';

const routes: Routes = [
  {
    path: "",
    //canActivate: [AuthGuard],
    loadChildren: () => import("../app/app.module").then((m)=> m.AppModule)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
