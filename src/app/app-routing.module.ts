import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountrieComponent } from './countrie/countrie.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countrie', component: CountrieComponent},
  { path: 'departments', component: DepartmentComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'countrie' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
