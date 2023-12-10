import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './layout/nav/nav.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component:DashboardComponent },
  { path: 'login', component:LoginComponent },
  { path: 'nav', component:NavComponent },
  { path: 'sidebar', component:SidebarComponent },
  { path: 'footer', component:FooterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
