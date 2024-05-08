import { Component, OnInit, inject } from '@angular/core';
import { apiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

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
    console.log('aa')
  }


}
