import { Component } from '@angular/core';

@Component({
  selector: 'docent-search',
  template: `
    <div class="card">
      <div class="card-content">
      <span class="card-title">Functionaliteit voor docenten</span>
      <div>Zoek naar docent-informatie</div>
      <search-box [searchItem]="item"></search-box>
      </div>
    </div>
  `
})
export class DocentSearchComponent { 
  item = "docent"
}
