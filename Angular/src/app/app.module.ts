import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Layout/Layout.component';
import { NavbarComponent } from './Layout/navbar/navbar.component'; 
import { FooterComponent } from './Layout/footer/footer.component';
import { PagesComponent } from './Pages/Pages.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { AgregarUsuarioComponent } from './Layout/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './Layout/editar-usuario/editar-usuario.component';
import { ListadoClientesComponent } from './Layout/listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [			
    AppComponent,
      LayoutComponent,
      NavbarComponent,
      FooterComponent,
      PagesComponent,
      AgregarUsuarioComponent,
      EditarUsuarioComponent,
      ListadoClientesComponent,      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
