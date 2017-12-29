import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//LIBRERIAS
import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule, FLATPICKR } from 'angularx-flatpickr';
import * as flatpickr from 'flatpickr';
import { AgmCoreModule } from '@agm/core';
import { SlickModule } from 'ngx-slick';

//CSS
import 'flatpickr/dist/flatpickr.css';

//COMPONENTES
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
import { ResumeDataComponent } from './components/course/resume/resume-data/resume-data.component';
import { PaymentComponent } from './components/course/resume/payment/payment.component';

//SERVICIOS
import { CourseService } from './service/course.service';
import { CitiesService } from './service/cities.service';
import { RegisterService } from './service/register.service';
import { CategoriesService } from './service/categories.service';

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
    DataComponent,
    ResumeDataComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    FlatpickrModule.forRoot({
      provide: FLATPICKR,
      useFactory: flatpickrFactory
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7oGFvJ-RyOTReb8F9V92XFPDuUeCeB7I'
    }),
    HttpClientModule,
    SlickModule.forRoot()
  ],
  providers: [
    CourseService,
    CitiesService,
    RegisterService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
