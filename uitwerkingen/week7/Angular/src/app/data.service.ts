import { Injectable } from '@angular/core';
import { Student, Docent, searchdata } from './interfaces';
import { studentdata,docentdata } from './data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  student?: Student
  docent?: Docent
  public studentdata$ = new BehaviorSubject<Student|undefined>(this.student)
  public docentdata$ = new BehaviorSubject<Docent|undefined>(this.docent)

  constructor() { }

  getData(what:searchdata) {
    console.log('greetings from the service')
    console.log(what)

    if (what.type=='student') {
      let tmp = studentdata.filter ( st => st.studentnummer == what.searchstring)
      if (tmp.length == 1) {
         this.student=tmp[0]
         this.docent=undefined
      }
    } else if (what.type=='docent') {
      let tmp = docentdata.filter ( doc => doc.code == what.searchstring)
      if (tmp.length == 1) {
        this.docent=tmp[0]
        this.student=undefined
      }
    }

    this.studentdata$.next(this.student)
    this.docentdata$.next(this.docent)

  }
}
