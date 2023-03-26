import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input('isChecked') isCheckedProps:boolean = false;

  @Output('onChanged') onChanged: EventEmitter<boolean> = new EventEmitter();


  toggle(event:any){
    this.onChanged.emit(event.target.checked)
  }
}
