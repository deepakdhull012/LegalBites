import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: './pages/landing/landing.module#LandingPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'verify',
    loadChildren: './pages/sign-in/sign-in.module#SignInPageModule'
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
