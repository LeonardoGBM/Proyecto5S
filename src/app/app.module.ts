import { PrimengModule } from './primeng/primeng.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './pages/books/books.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { EditorialsComponent } from './pages/editorials/editorials.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RolesComponent } from './pages/roles/roles.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { RentalsComponent } from './pages/rentals/rentals.component';


 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BooksComponent,
    AuthorsComponent,
    EditorialsComponent,
    CategoriesComponent,
    LoginComponent,
    RegisterComponent,
    RolesComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    RentalsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
