import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joao',
  templateUrl: './joao.page.html',
  styleUrls: ['./joao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JoaoPage{

  constructor(private route: Router) { }

  voltar() {
    this.route.navigate(['/home'])
  }
}
