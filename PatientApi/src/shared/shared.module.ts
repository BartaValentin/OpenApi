import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [],
  providers: [],
})
export class SharedModule { }

