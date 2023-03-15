import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public person: any = [];

  constructor() { }

  setPersonName(name: string): void {
    localStorage.setItem('personName', name);
  }

  getPersonName(): any {
    return localStorage.getItem('personName');
  }

  
  
  
}
