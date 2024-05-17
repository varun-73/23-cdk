import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.css']
})
export class ScrollingComponent implements OnInit {

  constructor() { }

  items = Array.from({length: 100}).map((_, i) => `Item #${i}`);
  ngOnInit(): void {
  }

}
