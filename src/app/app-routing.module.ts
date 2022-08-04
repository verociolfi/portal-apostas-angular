
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (m) => m.PagesModule
      ),
  },
  {
    path: 'rules',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (m) => m.PagesModule
      ),
  },
  {
    path: 'community',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (m) => m.PagesModule
      ),
  },
  {
    path: 'promotions',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (m) => m.PagesModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (m) => m.PagesModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (m) => m.PagesModule
      ),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
