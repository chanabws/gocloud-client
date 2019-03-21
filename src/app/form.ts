export class Form {

    constructor(
        public companyName: string,
        public regLicense: number,
        public industry: string,
        public regAddress: string,
        public regAddress2: string,
        public regPostal: number,
        public regBlock: number,
        public regUnitFloor: number,
        public regUnitNum: number,
        public title: string,
        public firstName: string,
        public lastName: string,
        public contactNum: number,
        public email: string,
        public comment: string
    ) {}

}



// let myHero =  new Hero(42, 'SkyDog',
//                        'Fetch any object at any distance',
//                        'Leslie Rollover');
// console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"