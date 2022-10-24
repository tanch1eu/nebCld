import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarKitMonthCellComponent } from './calendar-kit-month-cell.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  entryComponents: [CalendarKitMonthCellComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  date = new Date();
  month = new Date();
  monthCellComponent = CalendarKitMonthCellComponent;
}
