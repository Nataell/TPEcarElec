import { IonicPageModule } from "ionic-angular";
import { LoginPage } from "./login";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
