import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor( private breakPointObservable:BreakpointObserver) { 
    breakPointObservable.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( result => {
      for (let query of Object.keys(result.breakpoints))
        if(result.breakpoints[query])
          this.cols = this.displyMap.get(query) as string
    })
  }
  cols="3"
  displyMap = new Map([
    [Breakpoints.XSmall,'1'],
    [Breakpoints.Small,'2'],
    [Breakpoints.Medium,'3'],
    [Breakpoints.Large,'4'],
    [Breakpoints.XLarge,'4']
  ])
  ngOnInit(): void {
  }

}
