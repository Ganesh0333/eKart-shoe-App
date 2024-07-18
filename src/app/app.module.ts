import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EKartHeaderComponent } from './header/e-kart-header/e-kart-header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';

@NgModule({
  declarations: [
    AppComponent,
    EKartHeaderComponent,
    MainMenuComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
