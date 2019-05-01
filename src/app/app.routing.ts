﻿import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { AuthGuard } from './_guards';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { TuitionComponent } from './tuitions/tuition.component';
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

import { AboutUsComponent } from './about-us/aboutus.component';
import { MissionComponent } from './about-us/mission.component';
import { FaqComponent } from './about-us/faq.component';

import { AcademicsComponent } from './academics/academics.component';
import { InfantComponent } from './academics/infant.component';
import { ToddleComponent } from './academics/toddle.component';

import { PreKComponent } from './academics/preK.component';
import { KindergartenComponent } from './academics/kindergarten.component';
import { ElementaryComponent } from './academics/elementary.component';
import { MiddleComponent } from './academics/middle.component';

import { AthleticsComponent } from './programs/athletics.component';
import { MusicsComponent } from './programs/musics.component';
import { ArtsComponent } from './programs/arts.component';
import { TechnologyComponent } from './programs/technology.component';
import { ExploreComponent } from './programs/explore.component';

import { CampsComponent } from './camps/camps.component';
import { AfterSchoolComponent } from './camps/afterschool.component';
import { SummerCampComponent } from './camps/summercamp.component';

import { ParentsComponent } from './parents/parents.component';
import { InfoComponent } from './parents/info.component';
import { CalendarComponent } from './parents/calendar.component';
import { MenuComponent } from './parents/menu.component';
import { GalleryComponent } from './parents/gallery.component';
import { PTOComponent } from './parents/pto.component';
import { FacultyComponent } from './parents/faculty.component';
import { NewsComponent } from './parents/news.component';
import { FormsComponent } from './parents/forms.component';
import { HandbookComponent } from './parents/handbook.component';
import { ResourceComponent } from './parents/resource.component';

const appRoutes: Routes = [
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
		{ path: 'tuition', component:TuitionComponent, canActivate: [AuthGuard]},
		{ path: 'about-us', component: AboutUsComponent },
		{ path: 'about-us/mission', component: MissionComponent },		
		{ path: 'about-us/faqs', component: FaqComponent },

		{ path: 'academics', component: AcademicsComponent },
		{ path: 'academics/infant', component: InfantComponent },
		{ path: 'academics/toddle', component: ToddleComponent },
		{ path: 'academics/preK', component: PreKComponent },
		{ path: 'academics/kindergarten', component: KindergartenComponent},
	    { path: 'academics/elementary', component: ElementaryComponent },
		{ path: 'academics/middle', component: MiddleComponent},

		// { path: 'programs', component: AthleticsComponent },
		{ path: 'programs/athletics', component: AthleticsComponent },
		{ path: 'programs/musics', component: MusicsComponent },
		{ path: 'programs/arts', component: ArtsComponent },
		{ path: 'programs/technology', component: TechnologyComponent },
		{ path: 'programs/explore', component: ExploreComponent },

		{ path: 'camps', component: CampsComponent},
	    { path: 'camps/afterschool', component: AfterSchoolComponent },
		{ path: 'camps/summercamp', component: SummerCampComponent },

		{ path: 'parents', component: ParentsComponent },
		{ path: 'parents/info', component: InfoComponent },
		{ path: 'parents/calendar', component: CalendarComponent },
	    { path: 'parents/menu', component: MenuComponent},
	    { path: 'parents/gallery', component: GalleryComponent },
		{ path: 'parents/pto', component: PTOComponent },
		{ path: 'parents/faculty', component: FacultyComponent },
	    { path: 'parents/news', component: NewsComponent},
	    { path: 'parents/forms', component: FormsComponent },
		{ path: 'parents/handbook', component: HandbookComponent },
		{ path: 'parents/resource', component: ResourceComponent },

		// otherwise redirect to home
		// { path: '**', redirectTo: '', component:LayoutComponent },
		// { path: '', redirectTo: '/dashboard', pathMatch: 'full' , canActivate: [AuthGuard]}
		// { path: '', component: HomeComponent2}
	];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}
export const routing = RouterModule.forRoot(appRoutes);
