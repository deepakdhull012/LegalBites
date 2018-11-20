import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { SignInPage } from './sign-in.page';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { signInRoutes } from './sign-in.routes';
import { CoreModule } from './../../modules/core/core.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    RouterModule.forChild(signInRoutes)
  ],
  declarations: [
    SignInPage,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ContainerComponent
  ],
    providers: [
      Facebook,
      GooglePlus
    ]
})
export class SignInPageModule {}
