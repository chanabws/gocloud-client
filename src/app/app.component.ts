import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { FormService }        from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'gocloud';

  constructor(
    private route: ActivatedRoute
    // ,private formService: FormService
  ) { }

  ngOnInit() {
    // Anchor Route Scroll
    this.route.fragment.subscribe((fragment: string) => { 
      if (fragment && document.getElementById(fragment) != null) {
        const elem = document.getElementById(fragment);
        elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        // document.getElementById(fragment).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }
    });

    // // Email API
    // this.formService.getForms().subscribe((res)=>{
    //   this.formService.getForms().subscribe((res) => {
    //     // console.log(res.body);  ??
    //   })
    // });

  }
    
}
