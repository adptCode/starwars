import { Component, OnInit, inject } from '@angular/core';
import { apiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../models/starship.inteface';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent implements OnInit {

  private _route = inject(ActivatedRoute)
  private _apiService = inject(apiService);

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getStarshipDetails(params['id']).subscribe((response:Result) => {
        console.log(response)
      })
    })
  }


}
