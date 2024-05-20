import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../../models/starship.inteface';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent implements OnInit {

  private _route = inject(ActivatedRoute)
  private _apiService = inject(ApiService);

  public starshipDetail : Details = {
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: [],
    films: [],
    created: undefined,
    edited: undefined,
    url: ''
  }

  public photoURL:string = ''

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getStarshipDetails(params['id']).subscribe((response:Details) => {
        this.starshipDetail = response;
        const id = params['id'];
        this.getStarshipPhoto(id)
      })
    })
  }

  getStarshipPhoto(id:number){
    this.photoURL =  `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  }



}
