import { AccountCreationPage } from "./account-creation";
import { IonicPageModule } from "ionic-angular";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    AccountCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountCreationPage),
  ],
})
export class AccountCreationPageModule {}
