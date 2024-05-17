import { Component,  AfterViewInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})

export class PortalComponent implements AfterViewInit {

  constructor(private _viewContainerRef: ViewContainerRef) {}
  templatePortal!:TemplatePortal<any>
  @ViewChild('templateA') templateA!: TemplateRef<any>;
  @ViewChild('templateB') templateB!: TemplateRef<any>; 
  setTemplateA():void{
    this.templatePortal = new TemplatePortal(this.templateA, this._viewContainerRef)
  }
  setTemplateB():void{
    this.templatePortal = new TemplatePortal(this.templateB, this._viewContainerRef)
  }
 

  ngAfterViewInit() {
    this.setTemplateA();
  }
}
