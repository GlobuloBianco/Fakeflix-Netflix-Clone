import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-nav',
    template: `
        <div class="d-flex justify-content-between header">
            <div class="d-flex align-items-center">
                <h1>
                    <img src="../../assets/logo.png" alt="fakeflix logo" width="200px" draggable="false" />
                </h1>
                <p class="mt-3 pointer fs-5" [routerLink]="['/movies']">Sfoglia</p>
            </div>
            <div class="d-flex align-items-center btn-group">
                <p type="button" class="text-white mt-3 me-2 fs-5" [routerLink]="['/profile']">Profilo</p>
                <button type="button" class=" dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                    <span class="visually-hidden ">Toggle Dropdown</span>
                </button>
                <li class="text-center dropdown-menu pointer" (click)="logout()">Logout</li>
            </div>
        </div>
    `,
    styleUrls: ['./pages.scss']
})
export class NavbarPage {


    constructor(private auth: AuthService) { }

    ngOnInit(): void {
    }
    logout() {
        this.auth.logout()
    }
}
