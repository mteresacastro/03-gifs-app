import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];


  constructor() { }


  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){

      this._tagsHistory = this._tagsHistory.filter( oldtag => oldtag !== tag); }//esto filtra y remueve las etiquetas antiguas que sean iguales a la nueva.

      this._tagsHistory.unshift(tag); //esto agrega la etiqueta al array.

      this._tagsHistory = this._tagsHistory.splice(0, 10); // esto limita el array a 10 tags.


  }


  searchTag( tag:string): void{
    if(tag.length === 0) return;

    this.organizeHistory(tag);
  }
}
