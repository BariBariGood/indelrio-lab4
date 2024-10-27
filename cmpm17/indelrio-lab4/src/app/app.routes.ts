import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatetimeComponent } from './components/datetime/datetime.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { QuarterlyGoalsComponent } from './components/quarterly-goals/quarterly-goals.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'datetime', component: DatetimeComponent },
    { path: 'greeting', component: GreetingComponent },
    { path: 'quarterly-goals', component: QuarterlyGoalsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
  ];
