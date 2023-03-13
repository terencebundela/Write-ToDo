import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  inputValue!: string;
  name = '';
  person = {
    name: ''
  }

  constructor (private router: Router) {}


  onSubmit() {
  
    console.log(this.inputValue);
    if (this.inputValue) {
      this.router.navigate(['/main']);
    } 
  }

}
