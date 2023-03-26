import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch/switch.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';



@NgModule({
  declarations: [
    SwitchComponent,
    CustomButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SwitchComponent,
    CustomButtonComponent
  ]
})
export class SharedModule { }
