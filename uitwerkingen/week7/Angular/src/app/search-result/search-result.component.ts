import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Docent, searchdata, Student } from '../interfaces';
import { docentdata, studentdata } from '../data';
import { StudentSearchComponent } from '../cards/student-search.component';
import { DataService } from '../data.service';


@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent implements OnInit, OnChanges {

  @Input() searchdata?:searchdata
  docentdata?:Docent
  studentdata?:Student


  constructor(private dataservice:DataService) { }


  ngOnInit(): void {
    /* OPDRACHT 2B: 
      abonneer deze klasse op de streams van de dataservice
      (je zult die dataservice nog wel moeten injecteren)
    */

    this.dataservice.studentdata$.subscribe ( data => this.studentdata=data )
    this.dataservice.docentdata$.subscribe ( data => this.docentdata=data )
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* OPDRACHT 1C: 
      Zorg er hier voor dat de juiste data wordt opgeslagen
      in het veld `docentdata` of `studentdata`
    */

    console.log('Greetings from the result component')
    console.log(changes)
    console.log(this.searchdata)

    
    if (this.searchdata?.type=='student') {
      let tmp = studentdata.filter ( st => st.studentnummer == this.searchdata?.searchstring)
      if (tmp.length == 1) {
         this.studentdata=tmp[0]
         this.docentdata=undefined
      }
    } else if (this.searchdata?.type=='docent') {
      console.log('hier')
      let tmp = docentdata.filter ( doc => doc.code == this.searchdata?.searchstring)
      if (tmp.length == 1) {
        this.docentdata=tmp[0]
        this.studentdata=undefined
      }
    }
  }
}
