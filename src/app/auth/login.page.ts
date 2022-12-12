import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
    selector: 'app-login',
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
                <h2>Accedi</h2>
                <form class="d-flex flex-column w-100" #form="ngForm" (ngSubmit)="login(form)">
                    <div class="mt-3">
                        <input type="email" class="form-control ps-4" placeholder="Email" #email="ngModel" ngModel name="email" required />
                    </div>
                    <div class="mt-3">
                        <input type="password" class="form-control ps-4" placeholder="Password" #password="ngModel" placeholder="Password" ngModel name="password"
                    required />
                    </div>
                    <button class="btn btn-danger">Accedi</button>
                </form>
                <div class="mt-5 d-flex flex-column text-secondary">
                    <h3 class="h6">Prima volta su Fakeflix? <span class="text-white pointer"
                            [routerLink]="['/register']" routerLinkActive="router-link-active">Registrati</span>.
                    </h3>
                    <p class="mt-4 h6">
                        Questa pagina non è protetta da Fakeoogle reCAPTCHA perché non voglio che google mi faccia causa.<span id="idk"
                            [routerLink]="['/meme']"> Non scoprire di più.</span></p>
                </div>
            </div>
        </div>
    </div>
</div>
  `,
    styleUrls: ['./auth.scss']
})
export class LoginPage implements OnInit {

    constructor(private authSrv: AuthService, private router: Router) { }

    ngOnInit(): void {
    }
    async login(form: NgForm) {
        try {
            await this.authSrv.login(form.value).toPromise();
            this.router.navigate(['/'])
        } catch (error) {
            alert('error')
        }
    }

}
