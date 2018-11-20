import { Routes } from '@angular/router';

import { SignInPage } from './sign-in.page';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContainerComponent } from './container/container.component';

export const signInRoutes: Routes = [
    {
      path: '',
      component: ContainerComponent,
      children: [
        {
          path: 'signIn',
          component: SignInPage
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: 'forgotPassword',
          component: ForgotPasswordComponent
        },
        {
          path: 'changePassword',
          component: ChangePasswordComponent
        },
        {
          path: '',
          redirectTo: 'signIn',
          pathMatch: 'full'
        }
      ]
    },
  ];
