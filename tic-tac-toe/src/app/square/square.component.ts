import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div>
      <button>{{  value }}</button>
    </div>
    

  `,
  styles: [
    "button { width: 100%; height: 200px; font-size: 2em; font-weight: bold; }"
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O';


}
