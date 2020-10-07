import { Component, VERSION } from '@angular/core';
import { OnInit } from '@angular/core';
import {
 HttpClientModule,
 HttpClient,
 HTTP_INTERCEPTORS,
} from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  data:any = null

  constructor(private _http:HttpClient){}

  
ngOnInit() {
  return this._http
    .get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data => {
      this.data = data;
    });
}
}
