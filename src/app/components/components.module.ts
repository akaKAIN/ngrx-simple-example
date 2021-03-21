import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './cards/user/user.component';
import {ConfigComponent} from '../config/config.component';



@NgModule({
  declarations: [
    UserComponent,
    ConfigComponent
  ],
  exports: [
    UserComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
