import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagment',
  templateUrl: './engagment.component.html',
  styleUrls: ['./engagment.component.css']
})
export class EngagmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let navbar = document.querySelector(".panel-transparent")
    navbar.classList.add("panel-black")
  }
 

}
