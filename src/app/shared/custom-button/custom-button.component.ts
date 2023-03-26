import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input('text') textProps='';

  @Output('click') onClicked: EventEmitter<void> = new EventEmitter();


  onClick(event:any){
    event.stopPropagation();

    this.onClicked.emit();
  }

}
