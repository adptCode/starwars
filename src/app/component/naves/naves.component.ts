
import { Component, OnInit, inject } from '@angular/core';
import { starWarsApiService } from '../../services/starWarsApi.service';
import { result } from '../../interfaces/starship';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@Component({
  selector: 'app-naves',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule],
  templateUrl: './naves.component.html',
  styleUrl: './naves.component.scss'
})
export class NavesComponent implements OnInit {

  private _starWarsApiService = inject(starWarsApiService)

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
          Array.from(response.results).forEach((element:any) => {
            this.starshipsList = [...this.starshipsList, element]
          })

      }
    })
  }


}
