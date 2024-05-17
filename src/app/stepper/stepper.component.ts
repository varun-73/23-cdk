import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  steps = [
    { label: 'Step 1', content: 'Step 1 content' },
    { label: 'Step 2', content: 'Step 2 content' },
    { label: 'Step 3', content: 'Step 3 content' }
  ];
}
