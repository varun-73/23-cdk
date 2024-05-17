import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserversComponent } from './observers.component';

describe('ObserversComponent', () => {
  let component: ObserversComponent;
  let fixture: ComponentFixture<ObserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
