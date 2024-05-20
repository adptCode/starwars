import { Component, Input, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit {

  @Input() filmsUrl!:string;
  filmDetail: any = {};
  posterURL: string = '';

  private _apiService = inject(ApiService);

  ngOnInit(): void {
    if (this.filmsUrl) {
      this._apiService.getFilms(this.filmsUrl).subscribe((response) => {
        console.log(response)
        this.filmDetail = response;
        const id = this.filmsUrl.split('/').filter(part => part).pop();
        this.posterURL = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;
      });
    }

  }

}
