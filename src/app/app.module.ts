import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTrainsComponent } from './view-trains/view-trains.component';
import { ViewAllTrainsComponent } from './view-all-trains/view-all-trains.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {
    path:"view",component:ViewTrainsComponent
  },
  {
    path:"",component:ViewAllTrainsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewTrainsComponent,
    ViewAllTrainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
