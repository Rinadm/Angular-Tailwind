import { Component, OnInit } from '@angular/core';
import { dslist } from '../apptype.type';
import { dslist2 } from '../apptype.type';

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.css']
})
export class DataStructureComponent implements OnInit {


  public myDate = new Date();

  dslist = dslist
  dslist2= dslist2

  constructor() { }

  ngOnInit(): void {
  }

}
