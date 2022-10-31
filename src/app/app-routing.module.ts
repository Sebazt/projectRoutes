import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountrieComponent } from './countrie/countrie.component';
import { DepartmentComponent } from './department/department.component';
import { CountrieGuard } from './countrie.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [CountrieGuard] },
  { path: 'countrie', component: CountrieComponent},
  { path: 'departments', component: DepartmentComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
