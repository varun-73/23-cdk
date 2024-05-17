import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clip-board',
  templateUrl: './clip-board.component.html',
  styleUrls: ['./clip-board.component.css']
})
export class ClipBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public value='';
}
