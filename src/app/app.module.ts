import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { NbCalendarModule } from '@nebular/theme';
import { NbCalendarKitModule } from '@nebular/theme';
import { CalendarKitMonthCellComponent } from './calendar/calendar-kit-month-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarKitMonthCellComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbCalendarModule,
    NbCardModule,
    NbCalendarKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
