import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';
import { OptionComponent } from './option/option.component';



@NgModule({
  declarations: [AutocompleteComponent, OptionComponent],
  imports: [
  ],
  exports: [AutocompleteComponent, OptionComponent]
})
export class AutocompleteModule { }
