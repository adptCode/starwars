import { Component, OnInit, inject } from '@angular/core';
import { apiService } from '../../services/api.service';
import { result } from '../../models/starship.inteface';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@Component({
  selector: 'app-starship',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule],
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.scss'
})
export class StarshipComponent implements OnInit {

  private _starWarsApiService = inject(apiService)

  starshipsList: result[] = [];
  nextUrl:string = '';


  ngOnInit(): void {
    this._starWarsApiService.getStarships().subscribe({
      next: (response) => {
        this.starshipsList = response.results
        this.nextUrl = response.next
      }
    })
  }

  onScroll() {
    this._starWarsApiService.getStarships(this.nextUrl).subscribe({
      next: (response) => {
          this.nextUrl = response.next
          let newStarships = response.results
          newStarships.forEach((element:any) => {
              this.starshipsList = [...this.starshipsList, element]
          });
      }
    })
  }

  viewDetails() {
    console.log('aaaaa')
  }


}
