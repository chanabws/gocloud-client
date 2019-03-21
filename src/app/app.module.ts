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


// // ** Data Server Simulator - to be removed for production mode
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';


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
    HttpClientModule,
    
    // // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // // and returns simulated server responses.
    // // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
