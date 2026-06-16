import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'candidate/edit',
    loadComponent: () =>
      import('./pages/edit-candidate/edit-candidate').then((m) => m.EditCandidate),
  },
];
