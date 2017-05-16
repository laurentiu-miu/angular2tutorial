import {NgModule} from '@angular/core';
import {RestApiService} from './restapi.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  providers: [RestApiService],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
