import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'pedro',
    loadComponent: () => import('./pedro/pedro.page').then( m => m.PedroPage)
  },
  {
    path: 'jhon',
    loadComponent: () => import('./jhon/jhon.page').then( m => m.JhonPage)
  },
  {
    path: 'alice',
    loadComponent: () => import('./alice/alice.page').then( m => m.AlicePage)
  },
  {
    path: 'joao',
    loadComponent: () => import('./joao/joao.page').then( m => m.JoaoPage)
  },
  {
    path: 'vi',
    loadComponent: () => import('./vi/vi.page').then( m => m.ViPage)
  },

];
