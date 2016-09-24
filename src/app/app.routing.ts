import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login';
import { GoodsComponent } from '../components/goods/goods';

const appRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
  	{ path: '', component: GoodsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
