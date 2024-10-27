import { Component } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { DatetimeComponent } from '../datetime/datetime.component';
import { QuarterlyGoalsComponent } from '../quarterly-goals/quarterly-goals.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GreetingComponent, DatetimeComponent, QuarterlyGoalsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
