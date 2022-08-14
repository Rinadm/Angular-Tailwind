import { Component, OnInit } from '@angular/core';
import { dblist, dbtlist2 } from '../apptype.type';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.css']
})
export class DataBaseComponent implements OnInit {

  


  dblist = dblist
  dbtlist2= dbtlist2

  public myDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
