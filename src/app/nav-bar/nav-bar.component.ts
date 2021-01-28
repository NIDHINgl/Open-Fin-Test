import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navFields: string[];
  constructor() { 
    this.navFields = ["Products","Pricing","Solutions",]
  }

  ngOnInit(): void {
  }

}
