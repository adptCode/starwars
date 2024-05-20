import { Component, Input, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent implements OnInit{

  @Input() pilotUrl!:string;
  pilotDetail: any = {};
  photoURL: string = '';

  private _apiService = inject(ApiService);

  ngOnInit(): void {
    if (this.pilotUrl) {
      this._apiService.getPilots(this.pilotUrl).subscribe((response) => {
        console.log(response)
        this.pilotDetail = response;
        const id = this.pilotUrl.split('/').filter(part => part).pop();
        this.photoURL = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
      });
    }

  }


}
