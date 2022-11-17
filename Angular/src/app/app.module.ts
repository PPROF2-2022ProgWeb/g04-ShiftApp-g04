import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Layout/Layout.component';
import { NavbarComponent } from './Layout/navbar/navbar.component'; 
import { FooterComponent } from './Layout/footer/footer.component';
import { PagesComponent } from './Pages/Pages.component';
import { ServiciosComponent } from './Servicios/Servicios.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [			
    AppComponent,
      LayoutComponent,
      NavbarComponent,
      FooterComponent,
      PagesComponent,
      ServiciosComponent, 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
