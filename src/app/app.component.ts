import { Component, OnInit } from '@angular/core';
import { AuthController } from './controllers/authController/auth-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'bfdadmin';
  user: any;

  constructor(/*private authController: AuthController*/) {

  }
  ngOnInit(): void {
    /*if(localStorage.getItem('user')) {
      this.authController.user.subscribe(x => (this.user = x));
    }*/
  }

}
