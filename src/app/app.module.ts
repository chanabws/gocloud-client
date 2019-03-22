// ** Module @angular
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http';

// ** Module
import { AppRoutingModule }         from './app-routing.module';

// ** Component
import { AppComponent }             from './app.component';
import { HeaderComponent }          from './components/header/header.component';
import { HomeComponent }            from './components/home/home.component';
import { IntroComponent }           from './components/intro/intro.component';
import { CourseComponent }          from './components/course/course.component';
import { FormConsultComponent }     from './components/form-consult/form-consult.component';
import { FormProgrammeComponent }   from './components/form-programme/form-programme.component';
import { ContactComponent }         from './components/contact/contact.component';
import { FooterComponent }          from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IntroComponent,
    CourseComponent,
    FormConsultComponent,
    FormProgrammeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
