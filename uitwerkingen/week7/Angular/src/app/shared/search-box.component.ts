import { Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'search-box',
  template: `
    <span>
      <input #searchbox type="text" style="width: 25%" placeholder="Search" (blur)="handleEvent(searchbox.value)">
      <i class="material-icons" style="position: relative;top: 7px;cursor:pointer;" (click)="handleEvent(searchbox.value)">search</i>
    </span>
  `
})
export class SearchBoxComponent { 
  @Input() searchItem = ""
  @Output() newdata = new EventEmitter<String>()

  constructor (private el:ElementRef, private dataservice:DataService) {}

  handleEvent(searchstring:String) {
    console.log('greetings from the searchbox')
    let data = {
      type:this.searchItem,
      searchstring
    }
    console.log(data)
    console.log(this.searchItem)

    /* OPDRACHT 2A */
    this.dataservice.getData(data)


    /* OPDRACHT 1A */
    //this.el.nativeElement
    //  .dispatchEvent(new CustomEvent('newdata', {
    //    detail: data,
    //    bubbles: true
    //  }))
  }


}
