import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes:Routes =[
  {path:'heros', component:HeroComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'detail/:id', component:HeroDetailComponent},
  {path:'', redirectTo:'/dashboard',pathMatch:'full'}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
