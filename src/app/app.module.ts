import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'register',
       component: RegisterComponent
     },
     { path: 'login',
     component: LoginComponent
   },
   { path: 'home',
       component: HomeComponent
     },
     ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
