import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RequeststatusComponent } from './requeststatus/requeststatus.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AusersComponent } from './ausers/ausers.component';
import { AuserdetailsComponent } from './auserdetails/auserdetails.component';
import { GatepassComponent } from './gatepass/gatepass.component';
import { CartComponent } from './cart/cart.component';
import { SelflifeComponent } from './selflife/selflife.component';
import { SettingsComponent } from './settings/settings.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';

const routes: Routes = [

  { path: 'home', component: HomepageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'self-life', component: SelflifeComponent },
  { path: 'manager-role', component: ManageRolesComponent },
  { path: 'welcome', component: WelcomepageComponent },
  { path: 'gatepass/:equipmentId', component: GatepassComponent },
  { path: 'profile', component: ProfileComponent, children: [
    { path: 'requesthistory/:employeeId/:buttonId', component: AuserdetailsComponent }
]},
  { path: 'product', component: ProductPageComponent },
  { path: 'requeststatus', component: RequeststatusComponent },
  { path: 'viewequipments', component: HomepageComponent },
  { path: 'add-equipment', component: AddinventoryComponent },
  { path: 'users', component: AusersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'requesthistory/:employeeId/:buttonId', component: AuserdetailsComponent },
  { path: '', component: WelcomepageComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
