import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {


  constructor( private router: Router ) {}

  navegar() {
    this.router.navigate(['/pedro'])
  }

  navegar2() {
    this.router.navigate(['/jhon'])
  }

  navegar3() {
    this.router.navigate(['/alice'])
  }

  navegar4() {
    this.router.navigate(['/joao'])
  }

  navegar5() {
    this.router.navigate(['/vi'])
  }
}
