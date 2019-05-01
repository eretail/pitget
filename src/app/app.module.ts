﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { AppRouting, routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
//used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { NestedMenu } from './menu/nested-menu';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './_services/in-memory-data.service';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';

// import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
// import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
// import { AppHeaderComponent } from './_layout/app-header/app-header.component';
// import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
// import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';

import { LoginComponent2 } from './login2/login.component';
import { RegisterComponent2 } from './register2/register.component';
import { HomeComponent2 } from './home2/home.component';
import { DashboardComponent2 } from './dashboard2/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './layout//header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

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

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatMenuModule } from '@angular/material';

import { APP_BASE_HREF } from '@angular/common';
import { TuitionComponent } from './tuitions/tuition.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        NgbModule,
        FormsModule,
        AppRouting,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatMenuModule,
        BrowserAnimationsModule,
    
	    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
	    // and returns simulated server responses.
	    // Remove it when a real server is ready to receive requests.
	    HttpClientInMemoryWebApiModule.forRoot(
	      InMemoryDataService, { dataEncapsulation: false }
	    )

    ],
    declarations: [
        AboutComponent,AppComponent,AlertComponent,HomeComponent,HomeComponent2,LoginComponent,LoginComponent2,
        RegisterComponent,RegisterComponent2,DashboardComponent,DashboardComponent2,HeroesComponent,HeroDetailComponent,
	    MessagesComponent,HeroSearchComponent,ProfileComponent,TuitionComponent,        
        LayoutComponent,HeaderComponent,FooterComponent,
	//  AppHeaderComponent,AppLayoutComponent, SiteLayoutComponent,SiteHeaderComponent,SiteFooterComponent,
        
        AboutUsComponent, MissionComponent,FaqComponent,
        AcademicsComponent,InfantComponent, ToddleComponent, PreKComponent,KindergartenComponent,ElementaryComponent,MiddleComponent,
        ArtsComponent, TechnologyComponent, MusicsComponent, AthleticsComponent,CampsComponent, AfterSchoolComponent,SummerCampComponent,ExploreComponent,
        ParentsComponent, InfoComponent,CalendarComponent,MenuComponent,GalleryComponent,PTOComponent,FacultyComponent,NewsComponent,FormsComponent,HandbookComponent,ResourceComponent,

        NestedMenu
    ],

    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }