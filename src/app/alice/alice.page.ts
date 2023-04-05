import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alice',
  templateUrl: './alice.page.html',
  styleUrls: ['./alice.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlicePage {

  constructor(private route: Router) { }

  voltar() {
    this.route.navigate(['/home'])
  }

}
