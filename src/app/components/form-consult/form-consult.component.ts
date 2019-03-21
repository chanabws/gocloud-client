import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';

@Component({
  selector: 'app-form-consult',
  templateUrl: './form-consult.component.html',
  styleUrls: ['./form-consult.component.css']
})
export class FormConsultComponent implements OnInit {

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
    this.industry[0],
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

  newForm() {
    this.model = new Form('test', 123, this.industry[2], 'test', 'test', 123, 123, 123, 123, this.title[2], 'test', 'test', 123, 'test', 'comments');
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove for production
  get disgnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
