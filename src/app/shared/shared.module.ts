import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarLeftComponent,
    BannerComponent,
    FooterComponent,
    SidebarRightComponent,
    TablesComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    BannerComponent,
    FooterComponent,
    TablesComponent],
})
export class SharedModule { }
