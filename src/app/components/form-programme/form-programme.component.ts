import { Component, OnInit } from '@angular/core';
// import { FormService }                  from '../../form.service';
import { Form }                         from '../../form';
import { HttpClient, HttpHeaders, HttpParams }      from '@angular/common/http';

@Component({
  selector: 'app-form-programme',
  templateUrl: './form-programme.component.html',
  styleUrls: ['./form-programme.component.css']
})
export class FormProgrammeComponent implements OnInit {

  public forms: Form[];
  public formdata: Form[];

  constructor(private httpClient: HttpClient) { }
  // private formService: FormService, 

  ngOnInit() { 
  }

  submitted = false;

  // ** Synchronous signature method
  // getForms(): void {
  //   this.forms = this.formService.getForms();
  // }

  // ** Observable Asynchronous signature method
  // getForms(): void {
  //   this.formService.getForms()
  //     .subscribe(data => {this.forms = data; console.log(data)});
  // }

  // submitForm(formdata): void {
  //   this.formService.submitForm(formdata)
  //     .subscribe(data => {formdata = data; console.log("submitform: " +formdata)});
  // }
  

  submitForm(formProgramme) {
    console.log(formProgramme);
    // const headers = new HttpHeaders().set('Content-type', 'application/json');
    //  LocalHost development..
    // this.httpClient.post('http://localhost:4903/api/email', formProgramme)

    this.httpClient.post('http://point.sg.ibm.com:4903/api/email', formProgramme)
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(console.log);

    // formProgramme.reset();
    alert("Registration form submitted successful!")
  }


  // *****************  Form Preset data ***************************
  title = ['-- Please Select --', 'Mr', 'Mrs', 'Ms', 'Miss'];
  industry = [
    '-- Please Select --',
    'Aerospace',
    'Biomedical',
    'Chemicals',
    'Clean Technology',
    'Cyber Security',
    'Digital',
    'Education',
    'Electronics',
    'Food',
    'Furniture',
    'General Manufacturing',
    'Infocomm',
    'Logistics',
    'Media',
    'Metals & Machinery',
    'Motor',
    'Marine Offshore Marine',
    'Precision Engineering',
    'Start-ups',
    'Timber',
    'Woodworking',
    'Others'
  ];

  model = new Form(
    '', 
    null, 
    this.industry[2],
    '',
    '',
    null,
    null,
    null,
    null,
    this.title[0],
    '',
    '',
    null,
    '',
    ''
  );

  newDummy() {
    this.model = new Form(
      'Company Name ABC', 
      123456, 
      this.industry[2], 
      'Company Address xxx', 
      'Company Address2 xxx', 
      222333, 
      123, 
      10, 
      678, 
      this.title[2], 
      'first name xxx', 
      'last name xxx', 
      12345678, 
      'user@email.com.sg', 
      'objective to achieve.. xxxx'
    );
  }

}
