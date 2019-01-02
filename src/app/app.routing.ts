﻿import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import { HomeComponent } from './home';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

import { HomeComponent2 } from './home2/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent2 } from './login2/login.component';
import { RegisterComponent2 } from './register2/register.component';
import { DashboardComponent2 } from './dashboard2/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
		{ path: '', component: HomeComponent2},
		{ path: 'login', component: LoginComponent },
		{ path: 'register', component: RegisterComponent },
		{ path: 'dashboard', component: DashboardComponent },
		{ path: 'detail/:id', component: HeroDetailComponent },
		{ path: 'heroes', component: HeroesComponent },
		{ path: 'site', component: HomeComponent2, pathMatch: 'full'},
		{ path: 'about', component: AboutComponent },
		{ path: 'test/:id', component: AboutComponent },
		{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
		
	    { path: 'login2', component: LoginComponent2},
	    { path: 'register2', component: RegisterComponent2 },
		{ path: 'dashboard2', component: DashboardComponent2, canActivate: [AuthGuard] },
		
		// otherwise redirect to home
		{ path: '**', redirectTo: '' },
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' , canActivate: [AuthGuard]}    
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}
export const routing = RouterModule.forRoot(appRoutes);