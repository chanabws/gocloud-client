import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HeaderComponent }  from './components/header/header.component';
import { HomeComponent }    from './components/home/home.component';
import { IntroComponent }   from './components/intro/intro.component';
import { CourseComponent }  from './components/course/course.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'header',   component: HeaderComponent },
  { path: 'home',     component: HomeComponent },
  { path: 'intro',     component: IntroComponent },
  { path: 'course',   component: CourseComponent },
  { path: 'contact',  component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
