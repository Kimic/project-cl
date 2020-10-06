import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeadComponent,
    FooterComponent,
    MainComponent,
    MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeadComponent,
    FooterComponent,
    MenuComponent,
    MainComponent
  ]
})
export class CoreModule {
}
