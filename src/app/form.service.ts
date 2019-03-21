import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Form } from './form';
// import { FORMS } from './form-mock';
// import { environment }  from '../environments/environment';

const httpOptions = {
  // headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({ providedIn: 'root' })
export class FormService {

  private formsUrl = '/api/forms';  // URL to web apiformsUrl
  // private formsUrl = 'http://localhost:4903/api/forms';  // URL to web api
  // private formSubmitUrl = 'http://ibmgocloud/api/formProgramme/';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  // submitForm (regform: Form): Observable<Form> {
  //   console.log("regform json: " + JSON.stringify(regform));
  //   return this.httpClient.post<Form>(this.formSubmitUrl, 'thekfid ldkfj', httpOptions)
  //     .pipe(
  //       catchError(this.handleError('submitForm: ', regform))
  //     );
  // } 
  // JSON.stringify(regform)

  /** GET heroes from the server */
//   submitForm (): Observable<Form> {
//   console.log(Form)
//   return this.httpClient.get<Form>(this.formSubmitUrl)
// }

/** POST: add a new hero to the server */
// submitForm (formProgramme: NgForm): Observable<Hero> {
//   return this.httpClient.post<Hero>(this.formSubmitUrl, hero, httpOptions).pipe(
//     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
//     catchError(this.handleError<Hero>('addHero'))
//   );
// }

  // ** Synchronous signature method
  // getForms(): Form[] {
  //   return FORMS;
  // }

  // ** Observable Asynchronous signature method
  // getForms(): Observable<Form[]> {
  //   return of(FORMS);
  // }

  // ** HttpClient - Get Forms from the server   **********************************
  // getForms(): Observable<Form[]> {
  //   console.log("form.service - getForms()")
  //   return this.httpClient.get<Form[]>(this.formsUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched forms')),
  //       catchError(this.handleError('getForms error', []))
  //     );
  // }


  // ggggggggggggggggggggg
  // submitForm(formdata) {
  //   console.log("form.service - submitForm()");
  //   console.log(JSON.stringify(formdata));
  //   // return this.httpClient.get<Form[]>(this.formSubmitUrl)
  //   this.httpClient.post(this.formsUrl, JSON.stringify(formdata), httpOptions)
  //     .pipe(
  //       tap(_ => this.log('fetched forms')),
  //       catchError(this.handleError<Form>('getForms error'))
  //     );
  // }

  // submitForm(regform: Form) {
  //   return this.httpClient.get<Form[]>(this.formSubmitUrl)
  //   // return this.httpClient.post(`${this.formSubmitUrl}`, regform, httpOptions)
  //     .pipe(
  //       tap(_ => this.log('submitted forms')),
  //       catchError(this.handleError('submitForm', []))
  //     );
  // }

  /** POST: add a new hero to the server */
  // submitForm (formProgramme): Observable<Form> {
  //   console.log("form.service - submitForm()")
  //   console.log(JSON.stringify(formProgramme))
  //   return this.httpClient.post<Form>(this.formSubmitUrl, formProgramme, httpOptions)
  //   .pipe(
  //     // tap((newForm: Form) => this.log(`added form w/ id=${newForm}`)),
  //     catchError(this.handleError<Form>('addForm'))
  //   );
  // }


    // public sendForm(form: Form) {}

    // public getForm(){
    //   return this.httpClient.get<Form[]>(`${this.formUrl}/form`);
    // }



  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
    // this.messageService.add(`HeroService: ${message}`);
  }

}
