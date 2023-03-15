import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name!: string;
  

  constructor (private router: Router, private localStorage: LocalStorageService) {}


  onSubmit(event: Event) {
    event.preventDefault(); // prevent redirection
    if (!this.name) { // check if input is empty
      return;
    }
  
    this.localStorage.setPersonName(this.name);
    window.location.href = '/main';
  }
  

}
