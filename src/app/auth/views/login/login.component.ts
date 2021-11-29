import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthController } from 'src/app/controllers/authController/auth-controller.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  user = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router, private authController: AuthController) { }

  ngOnInit(): void {
  }


  login() {
    if(this.user.valid && this.password.valid) {
      Swal.fire({
        title: `Welcome ${this.user.value}!`,
        icon: 'success',
        timer: 1100,
        showConfirmButton: false
      }).then(result => {
        if(result.dismiss) {
          this.authController.login({ user: this.user.value });
        }
      })
    }
    else {
      Swal.fire({
        title: `Incomplete Data`,
        icon: 'error',
        timer: 900,
        showConfirmButton: false
      });
    }
  }

}
