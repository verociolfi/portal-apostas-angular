import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  exports: [HomeComponent]
})
export class PagesModule { }
