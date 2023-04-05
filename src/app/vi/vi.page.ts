import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vi',
  templateUrl: './vi.page.html',
  styleUrls: ['./vi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViPage{

  constructor(private route: Router) { }

  voltar() {
    this.route.navigate(['/home'])
  }

}
