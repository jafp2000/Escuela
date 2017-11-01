import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//LIBRERIAS
import { CalendarModule } from 'angular-calendar';
import { DragScrollModule } from 'angular2-drag-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/course/list/list.component';
import { FormComponent } from './components/course/form/form.component';
import { ResumeComponent } from './components/course/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    FormComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    DragScrollModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
