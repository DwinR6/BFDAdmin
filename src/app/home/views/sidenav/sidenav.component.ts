import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthController } from 'src/app/controllers/authController/auth-controller.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  title: string = 'Barrio Fino Driver Admin';
  isMenuOpen: boolean = true;
  user: any;

  constructor(private authController: AuthController) {
    this.user = this.authController.user ? this.authController.user : null;
  }

  getTitulo(title: string, sidenav: MatSidenav) {
    this.title = title;
    sidenav.toggle();
  }

  toggleMenu(sidenav: MatSidenav) {
    sidenav.toggle();
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authController.logout();
  }

}
