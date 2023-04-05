import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jhon',
  templateUrl: './jhon.page.html',
  styleUrls: ['./jhon.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JhonPage   {

  constructor(private router: Router) { }

  voltar() {
    this.router.navigate(['/home'])
  }

}
