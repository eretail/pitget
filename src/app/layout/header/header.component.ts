import { Component, OnInit, ViewChild, ViewChildren, ElementRef, HostListener } from '@angular/core';
import {MatMenuTrigger, MatMenu} from '@angular/material/menu';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @ViewChildren(MatMenuTrigger)  menuTriggers: MatMenuTrigger;
  @ViewChild('aboutMenuTrigger')  menuTrigger1: MatMenuTrigger;
  @ViewChild('academicsMenuTrigger')  menuTrigger2: MatMenuTrigger;
  @ViewChild('campusMenuTrigger')  menuTrigger3: MatMenuTrigger;
  @ViewChild('parentMenuTrigger')  menuTrigger4: MatMenuTrigger;
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  openMenu(menuTrigger:MatMenuTrigger) {
    
    let pos = window.pageYOffset;
    this.closeMenu();
    console.log('called everyt time open Menu'+menuTrigger);
    menuTrigger.openMenu();
    document.body.scrollTop = document.documentElement.scrollTop = pos;
  }

  closeMenu() {
    if(this.menuTrigger1.menuOpen)
      this.menuTrigger1.closeMenu();
  
    if(this.menuTrigger2.menuOpen)
      this.menuTrigger2.closeMenu();
   
    if(this.menuTrigger3.menuOpen)
      this.menuTrigger3.closeMenu();
    
    if(this.menuTrigger4.menuOpen)
      this.menuTrigger4.closeMenu(); 
      console.log('called everyt time close Menu');
  }

  isOpened(evt:any){
        console.log('it is called->in the middle');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
    console.log('after init');
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll1(){
      // window.scrollTo(0, 0);
      const windowScroll = window.pageYOffset;

      // console.log('windowScroll->'+windowScroll+'---this.elementPosition->'+this.elementPosition);

      event.stopPropagation();
      event.preventDefault();

      if(windowScroll >= this.elementPosition){
        this.sticky = true;
        // console.log('it is called->in the middle');
      } else {
        this.sticky = false;
        // console.log('it is called->to the top');
      }
    }
}