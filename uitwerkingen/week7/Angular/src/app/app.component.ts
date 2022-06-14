import { Component } from '@angular/core';
import { searchdata } from './interfaces';

@Component({
  selector: 'app-root',
  template: `
    <h4>Voorbeeld van werken met meerdere modules</h4>
    <!-- 
       OPDRACHT 2: voorzie deze componenten van een event-handler die 
       reageert op het doorsturen van nieuwe data
    -->
    <docent-search (newdata)="handleNewData($event)"></docent-search>
    <student-search (newdata)="handleNewData($event)"></student-search>

    <!-- OPDRACHT 3: stuur de waarde van 'searchdata' door naar het 
      search-result component
    --> 
    <search-result [searchdata]="searchdata"></search-result>
  `
})
export class AppComponent { 

  searchdata?:searchdata

  handleNewData(e:Event) {
    // OPDRACHT 2
    console.log('Greetings from the app-component')
    console.log(e)

    let foo = e as CustomEvent
    console.log(foo.detail)
    this.searchdata = foo.detail

  }
}
