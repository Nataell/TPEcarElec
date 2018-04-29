import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountCreationPage } from './account-creation';

@NgModule({
  declarations: [
    AccountCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountCreationPage),
  ],
})
export class AccountCreationPageModule {}
