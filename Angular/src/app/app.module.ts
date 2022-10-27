import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Layout/Layout.component';
import { NavbarComponent } from './Layout/navbar/navbar.component'; 
import { FooterComponent } from './Layout/footer/footer.component';
import { PagesComponent } from './Pages/Pages.component';
import { ServiciosComponent } from './Servicios/Servicios.component';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresarComponent } from './Pages/ingresar/ingresar.component';
import { RegistrarseComponent } from './Pages/registrarse/registrarse.component';

@NgModule({
  declarations: [			
    AppComponent,
      LayoutComponent,
      NavbarComponent,
      FooterComponent,
      PagesComponent,
      ServiciosComponent,
      IngresarComponent,
      RegistrarseComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
