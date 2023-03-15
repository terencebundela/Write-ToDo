import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

name: string;

  constructor(private localStorage: LocalStorageService) {
    this.name = this.localStorage.getPersonName();
  }


}
