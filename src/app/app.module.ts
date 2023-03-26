import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 1000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        progressAnimation:'increasing',
        progressBar:true,
        // toastClass:'ngx-toastr app-toast',


      }
    ),
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
