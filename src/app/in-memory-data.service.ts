import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Form } from './form';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const forms = [
      { companyName:'cmpy111999', regLicense:12345, industry:'test', regAddress:'sgp address', regAddress2:'na', regPostal:333444, regBlock:123, regUnitFloor:12, regUnitNum:34,
        title:'Mr', firstName:'Firstname', lastName:'Lastname', contactNum:48575059, email:'abcd@email.com', comment:'learn programme' },
      { companyName:'cmpy222', regLicense:456567, industry:'test', regAddress:'sgp address', regAddress2:'na', regPostal:333444, regBlock:123, regUnitFloor:12, regUnitNum:34,
        title:'Mr', firstName:'Firstname', lastName:'Lastname', contactNum:48575059, email:'abcd@email.com', comment:'learn programme' },
      { companyName:'cmpy333', regLicense:768788, industry:'test', regAddress:'sgp address', regAddress2:'na', regPostal:333444, regBlock:123, regUnitFloor:12, regUnitNum:34,
        title:'Mr', firstName:'Firstname', lastName:'Lastname', contactNum:48575059, email:'abcd@email.com', comment:'learn programme' }

    ];
    return {forms};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }

  constructor() { }
}
