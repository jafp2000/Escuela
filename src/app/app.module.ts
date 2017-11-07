import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//LIBRERIAS
import { CalendarModule } from 'angular-calendar';
import { DragScrollModule } from 'angular2-drag-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule, FLATPICKR } from 'angularx-flatpickr';
import * as flatpickr from 'flatpickr';

//CSS
import 'flatpickr/dist/flatpickr.css';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/course/list/list.component';
import { FormComponent } from './components/course/form/form.component';
import { ResumeComponent } from './components/course/resume/resume.component';
import { CalendarComponent } from './components/course/form/calendar/calendar.component';
import { ScheduleComponent } from './components/course/form/schedule/schedule.component';
import { SelectedComponent } from './components/course/form/selected/selected.component';
import { DataComponent } from './components/course/form/data/data.component';

export function flatpickrFactory() {
  return flatpickr;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    FormComponent,
    ResumeComponent,
    CalendarComponent,
    ScheduleComponent,
    SelectedComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    DragScrollModule,
    NgbModule.forRoot(),
    FormsModule,
    FlatpickrModule.forRoot({
      provide: FLATPICKR,
      useFactory: flatpickrFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
