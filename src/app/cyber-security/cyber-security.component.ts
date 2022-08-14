import { Component, OnInit } from '@angular/core';
import { cyberlist } from './cyber.type';
import { cyberlist2} from './cyber.type'


@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.css']
})
export class CyberSecurityComponent implements OnInit {
  public myDate = new Date();

 
 list = cyberlist
 list2 = cyberlist2
  constructor() { }

  ngOnInit(): void {
    console.log(cyberlist) 
  }

}
