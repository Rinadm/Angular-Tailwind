import { Component, OnInit } from '@angular/core';
import { Netlist, Netlist2 } from '../apptype.type';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {

  public myDate = new Date();

  netlist = Netlist
  netlist2= Netlist2
  constructor() { }

  ngOnInit(): void {
  }

}
