import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
