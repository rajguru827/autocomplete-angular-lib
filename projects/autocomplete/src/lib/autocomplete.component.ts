import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ug-autocomplete',
  template: `
  <div class="autocomplete">
    <ng-content></ng-content>
  </div>
  `,
  styles: [
  ]
})
export class AutocompleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
