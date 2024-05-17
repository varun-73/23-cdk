import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipBoardComponent } from './clip-board/clip-board.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CollectionsComponent } from './collections/collections.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { ListBoxComponent } from './list-box/list-box.component';
import { MenuComponent } from './menu/menu.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ObserversModule } from '@angular/cdk/observers'; 
import {OverlayModule} from '@angular/cdk/overlay';
import { OverlayComponent } from './overlay/overlay.component';
import { PlatformComponent } from './platform/platform.component';
import {PlatformModule} from '@angular/cdk/platform';
import { PortalComponent } from './portal/portal.component';
import {PortalModule} from '@angular/cdk/portal';
import { ScrollingComponent } from './scrolling/scrolling.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { TextFieldComponent } from './text-field/text-field.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    ClipBoardComponent,
    CollectionsComponent,
    DragAndDropComponent,
    LayoutComponent,
    ListBoxComponent,
    MenuComponent,
    OverlayComponent,
    PlatformComponent,
    PortalComponent,
    ScrollingComponent,
    StepperComponent,
    TableComponent,
    TextFieldComponent
  ],
  imports: [
    BrowserModule,MatIconModule,
    CdkAccordionModule,MatButtonModule,
    FormsModule,MatPaginatorModule,
    ClipboardModule,
    MatListModule,
    MatCheckboxModule,
    LayoutModule,CdkTableModule,
    CdkListboxModule,CdkStepperModule,
    CdkMenuModule,ScrollingModule,
    DragDropModule,PortalModule,
    MatGridListModule,PlatformModule,
    ObserversModule ,OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
