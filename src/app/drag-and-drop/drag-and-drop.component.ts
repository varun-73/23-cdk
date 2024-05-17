import {  CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

  iplTeams = [ "Punjab", "Banglore", "Hyderabad","Delhi","Kolkata","Lucknow"]
  ngOnInit(): void {
  }
  drop(event:CdkDragDrop<string[]>){
    moveItemInArray(this.iplTeams, event.previousIndex, event.currentIndex)
  }

}
