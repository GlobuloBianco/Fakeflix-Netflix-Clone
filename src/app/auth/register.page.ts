import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
    selector: 'app-register',
    template: `
<div class="loginBody h-100 text-center">
    <div class="d-flex">
        <h1>
            <img src="../../assets/logo.png" alt="fakeflix logo" width="300px" draggable="false" />
        </h1>
    </div>
    <div class="d-flex justify-content-center">
        <div class="formLogin">
            <div class="d-flex flex-column align-items-start formContent">
                <h2>Registrati</h2>
                <form class="d-flex flex-column w-100" #form="ngForm" (ngSubmit)="login(form)">
                    <div class="mt-4">
                        <input type="text" class="form-control ps-4" placeholder="Username" #name="ngModel" ngModel name="name" required />
                    </div>
                    <div class="mt-4">
                        <input type="email" class="form-control ps-4" placeholder="Email" #email="ngModel" ngModel name="email" required />
                    </div>
                    <div class="mt-4">
                        <input type="password" class="form-control ps-4" placeholder="Password" #password="ngModel" placeholder="Password" ngModel name="password"
                    required />
                    </div>
                    <button type="submit" class="btn btn-danger">Accedi</button>
                </form>
                <div class="mt-5 d-flex flex-column text-secondary">
                    <h3 class="h6">Hai già un account Fakeflix? <span class="text-white pointer"
                            [routerLink]="['/login']" routerLinkActive="router-link-active">Vai al
                            login</span>.</h3>
                </div>
            </div>
        </div>
    </div>
</div>
  `,
    styleUrls: ['./auth.scss']
})
export class RegisterPage implements OnInit {
    constructor(private authSrv: AuthService, private router: Router) { }
    ngOnInit(): void { }
    async login(form: NgForm) {
        try {
            await this.authSrv.register(form.value).toPromise();
            this.router.navigate(['/login'])
        } catch (error) {
            alert('error')
        }
    }
}
