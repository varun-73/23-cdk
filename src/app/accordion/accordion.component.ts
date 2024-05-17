import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = [{id:"1",name:"varun"},
  {id:"2",name:"kumar"},
  {id:"3",name:"Raju"}
   
  ];
  expandedIndex = 0;

}
