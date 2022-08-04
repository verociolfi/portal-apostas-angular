import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegrasComponent } from './regras/regras.component';
import { CommunityComponent } from './community/community.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HomeComponent, AboutUsComponent, RegrasComponent, CommunityComponent, PromotionsComponent, RegisterComponent, LoginComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'rules',
        component: RegrasComponent
      },
      {
        path: 'community',
        component: CommunityComponent
      },
      {
        path: 'promotions',
        component: PromotionsComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  exports: [HomeComponent]
})
export class PagesModule { }
