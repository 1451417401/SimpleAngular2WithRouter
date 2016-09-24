import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { routing,appRoutingProviders }  from './app.routing';

import { LoginComponent } from '../components/login/login';
import { HomeComponent } from '../components/home/home';
import { GoodsComponent } from '../components/goods/goods';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
   	LoginComponent,
    HomeComponent,
    GoodsComponent
   
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
