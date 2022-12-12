import { Component, OnInit } from '@angular/core';
import { MovieFav, MoviesService } from './movies.service';

@Component({
    selector: 'app-movies',
    template: `
    <div class="d-flex flex-wrap justify-content-evenly">
        <div *ngFor="let movie of movies; let i = index">
            <div class="card-body d-flex flex-column mt-5">
                <img class="resize" [src]="'https://image.tmdb.org/t/p/w500' + movie.data.poster_path" alt="" />
                <button class="btn btn-dark" (click)="movie.favoriteId ? remove(movie.favoriteId, i) : add(movie.data.id, i, true)"><span *ngIf="movie.heart == true">🧡</span><span *ngIf="movie.heart != true">🤍</span></button>
            </div>
        </div>
    </div>
  `,
    styleUrls: ['./pages.scss']
})
export class MoviesPage implements OnInit {
    movies!: MovieFav[];
    constructor(private movieSrv: MoviesService) {
    }

    async ngOnInit() {
        this.movies = await this.movieSrv.getPopularMovies();
    }

    async add(idM: number, i: number, heart:boolean) {
        this.movies[i].favoriteb = true;
        try {
            const newFav: any = await (await this.movieSrv.addFavorite(idM, heart)).toPromise();
            //this.movies[i].favoriteb = false;
            this.movies[i] = { ...this.movies[i], favoriteId: newFav.id }
        } catch (error) {
            this.movies[i].favoriteb = false;
            alert(error);
        }
    }
    async remove(idF: number, i: number) {
        this.movies[i].favoriteb = true;
        try {
            await this.movieSrv.removeFavorite(idF).toPromise();
            //this.movies[i].favoriteb = false;
            this.movies[i] = { ...this.movies[i], favoriteId: undefined }
        } catch (error) {
            this.movies[i].favoriteb = false;
            alert(error);
        }
    }
}
