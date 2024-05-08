import { Component, OnInit, inject } from '@angular/core';
import { apiService } from '../../services/api.service';
import { Result } from '../../models/starship.inteface';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';



@Component({
  selector: 'app-starship',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule],
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.scss'
})
export class StarshipComponent implements OnInit {

  private _apiService = inject(apiService);
  private _router = inject(Router)

  starshipsList: Result[] = [];
  nextUrl:string = '';



  ngOnInit(): void {
    this.getStarships()
  }

  generateId(arr:any) {
    arr.forEach((element:Result) => {
      element.id = element.url.slice(0, -1).split('/').pop()
    })
  }

  getStarships() {
    this._apiService.getStarships().subscribe({
      next: (response) => {
        this.starshipsList = response.results
        this.nextUrl = response.next
        this.generateId(this.starshipsList)
      }
    })
  }

  onScroll() {
    this._apiService.getStarships(this.nextUrl).subscribe({
      next: (response) => {
          this.nextUrl = response.next
          let newStarships = response.results
          this.generateId(newStarships)
          newStarships.forEach((element:Result) => {
              this.starshipsList = [...this.starshipsList, element]
          });
      }
    })
  }

  navigate(id:number) {
    this._router.navigate(['starships', id])
 }

}
