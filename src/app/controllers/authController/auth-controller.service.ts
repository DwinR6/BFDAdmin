import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthController {

  constructor(private router: Router) {
  }

  public get user(): any {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : null;
  }

  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl('/home/management');
  }

  logout() {
    Swal.fire({
      title: '¿Are you sure you want to exit?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: 'var(--primario)'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        this.router.navigateByUrl('/auth/login');
      }
    })
  }

}
