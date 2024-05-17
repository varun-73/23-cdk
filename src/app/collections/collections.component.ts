import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  items = [
    {title:'Item1', id:1},
    {title:'Item2', id:2},
    {title:'Item3', id:3},
    {title:'Item4', id:4},
    {title:'Item5', id:5}
  ]
  selectionModel = new SelectionModel(true)


  constructor() { }

  ngOnInit(): void {
    this.selectionModel.changed.subscribe( (selected:any) => {
      console.log(selected);
    })
  }

}
