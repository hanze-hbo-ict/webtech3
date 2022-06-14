import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DocentSearchComponent } from './docent-search.component'
import { StudentSearchComponent } from './student-search.component'

@NgModule({
  declarations: [
    DocentSearchComponent,
    StudentSearchComponent,
  ],
  exports: [DocentSearchComponent, StudentSearchComponent,],
  imports: [SharedModule, CommonModule]
})

export class CardModule { }