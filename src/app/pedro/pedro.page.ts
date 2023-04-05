import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedro',
  templateUrl: './pedro.page.html',
  styleUrls: ['./pedro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PedroPage{

  constructor(private router: Router) { }

  voltar() {
    this.router.navigate(['/home'])
  }

}
