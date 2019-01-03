﻿import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { AuthGuard } from './_guards';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent2 } from './home2/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent2 } from './login2/login.component';
import { RegisterComponent2 } from './register2/register.component';
import { DashboardComponent2 } from './dashboard2/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { MissionComponent } from './about-us/mission.component';
import { FaqComponent } from './about-us/faqs.component';
import { PreKComponent } from './academics/preK.component';
import { KindergartenComponent } from './academics/kindergarten.component';
import { ElementaryComponent } from './academics/elementary.component';
import { MiddleComponent } from './academics/middle.component';
import { ArtsComponent } from './academics/arts.component';
import { TechnologyComponent } from './academics/technology.component';
import { AthleticsComponent } from './athletics.component';
import { CampsComponent } from './camps.component';
import { AfterschoolComponent } from './camps/afterschool.component';
import { SummerCampComponent } from './camps/summercamp.component';
import { ParentsComponent } from './parents.component';
import { ParentInfoComponent } from './parents/parentinfo.component';
import { CalendarComponent } from './parents/calendar.component';
import { MenuComponent } from './menu.component';
import { GalleryComponent } from './parents/gallery.component';
import { PTOComponent } from './parents/pto.component';
import { OurFacultyComponent } from './parents/our-faculty.component';
import { NewsComponent } from './parents/news.component';
import { FormsComponent } from './parents/forms.component';
import { HandbookComponent } from './parents/handbook.component';

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

		{ path: 'mission', component: MissionComponent },
		{ path: 'faq', component: FaqComponent },
		{ path: 'preK', component: PreKComponent },		
	    { path: 'kindergarten', component: KindergartenComponent},
	    { path: 'elementary', component: ElementaryComponent },
		{ path: 'middle', component: MiddleComponent},
		{ path: 'arts', component: ArtsComponent },
		{ path: 'technology', component: TechnologyComponent },
		{ path: 'athletics', component: AthleticsComponent },		
	    { path: 'camps', component: CampsComponent},
	    { path: 'afterschool', component: AfterschoolComponent },
		{ path: 'summercamp', component: SummerCampComponent },
		{ path: 'parent', component: ParentsComponent },
		{ path: 'parentInfo', component: ParentInfoComponent },
		{ path: 'calendar', component: CalendarComponent },		
	    { path: 'menu', component: MenuComponent},
	    { path: 'gallery', component: GalleryComponent },
		{ path: 'pto', component: PTOComponent },
		{ path: 'faculty', component: OurFacultyComponent },		
	    { path: 'news', component: NewsComponent},
	    { path: 'forms', component: FormsComponent },
		{ path: 'handbook', component: HandbookComponent },


		// otherwise redirect to home
		{ path: '**', redirectTo: '', component:LayoutComponent },
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' , canActivate: [AuthGuard]}    
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}
export const routing = RouterModule.forRoot(appRoutes);