import { NgModule } from '@angular/core';
import { ComponentBComponent } from './component-b/component-b.component';
import { LibraryAModule } from 'library-a';

@NgModule({
  declarations: [ComponentBComponent],
  imports: [LibraryAModule],
  exports: [],
})
export class LibraryBModule {}
