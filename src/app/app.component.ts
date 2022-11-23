import { Component } from '@angular/core';
import { ApiempService } from './services/apiemp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newdata:any;
  constructor(private apiempservice:ApiempService){}
  title = 'User-Management-System';
  ngonit(){
    this.apiempservice.getdata().subscribe(result=>{
      this.newdata =result;
    })
  }
}
