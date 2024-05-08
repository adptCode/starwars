import { Component, OnInit, inject } from '@angular/core';
import { apiService } from '../../services/api.service';
import { result } from '../../models/starship.inteface';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Router } from '@angular/router';



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

  starshipsList: result[] = [];
  nextUrl:string = '';
  id: number = 0;


  ngOnInit(): void {
    this._apiService.getStarships().subscribe({
      next: (response) => {
        this.starshipsList = response.results
        this.nextUrl = response.next
      }
    })
  }

  getStarships() {
    
  }

  onScroll() {
    this._apiService.getStarships(this.nextUrl).subscribe({
      next: (response) => {
          this.nextUrl = response.next
          let newStarships = response.results
          newStarships.forEach((element:any) => {
              this.starshipsList = [...this.starshipsList, element]
          });
      }
    })
  }

  findId(url:string) {

  }
 navigate(id:number) {
  this._router.navigate(['details'])

 }

}
