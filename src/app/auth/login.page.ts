import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
    selector: 'app-login',
    template: `
    <div class="d-flex flex-column align-items-start formContent">
                <h2>Accedi</h2>
                <form class="d-flex flex-column w-100">
                    <div class="mt-3">
                        <input type="email" class="form-control ps-4" placeholder="Email" required />
                    </div>
                    <div class="mt-3">
                        <input type="password" class="form-control ps-4" placeholder="Password" required />
                    </div>
                    <button class="btn btn-danger">Accedi</button>
                </form>
                <div class="mt-5 d-flex flex-column text-secondary">
                    <h3 class="h6">Prima volta su Fakeflix? <span class="text-white pointer" [routerLink]="['/login/in/signup']" routerLinkActive="router-link-active">Registrati</span>.</h3>
                    <p class="mt-4 h6">
                        Questa pagina non è protetta da Google reCAPTCHA perché idk.<span id="idk" [routerLink]="['/meme']"> Non scoprire di più.</span></p>
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
