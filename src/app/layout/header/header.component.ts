import { Component, OnInit, ViewChildren, Input } from '@angular/core';
import {MatMenuTrigger, MatMenu} from '@angular/material/menu'
import { ViewChild } from '@angular/core'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }
  
  @ViewChildren(MatMenuTrigger)  menuTriggers: MatMenuTrigger;
  @ViewChild('aboutMenuTrigger')  menuTrigger1: MatMenuTrigger;
  @ViewChild('academicsMenuTrigger')  menuTrigger2: MatMenuTrigger;
  @ViewChild('campusMenuTrigger')  menuTrigger3: MatMenuTrigger;
  @ViewChild('parentMenuTrigger')  menuTrigger4: MatMenuTrigger;

  closeMenu() {
    // this.menuTriggers.toArray()[1].closeMenu();
    this.menuTrigger1.closeMenu();
    this.menuTrigger2.closeMenu();
    this.menuTrigger3.closeMenu();
    this.menuTrigger4.closeMenu();
    console.log('it is called->');
  }

  ngOnInit() {
  }

}