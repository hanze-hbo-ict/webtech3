import { Component } from '@angular/core';

@Component({
  selector: 'student-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Functionaliteit voor studenten</span>
        <div>Zoek naar studentgegevens</div>
          <search-box [searchItem]="item"></search-box>
      </div>
    </div>
  `
})
export class StudentSearchComponent { 

  item = "student"

}
