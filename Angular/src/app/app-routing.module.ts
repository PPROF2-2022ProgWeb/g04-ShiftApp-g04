import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { AppComponent } from './app.component';*/
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { ECommerceComponent } from './Pages/eCommerce/eCommerce.component';
import { IngresarComponent } from './Pages/ingresar/ingresar.component';
import { RegistrarseComponent } from './Pages/registrarse/registrarse.component';
import { RegEmpresaComponent } from './Pages/reg-empresa/reg-empresa.component';
import { TurneroComponent } from './Pages/turnero/turnero.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';

const routes: Routes = [
 /*{path: "", component: AppComponent },*/
 {path:"inicio", component: InicioComponent},
 {path:"nosotros", component: NosotrosComponent},
 {path:"eCommerce", component: ECommerceComponent},
 {path:"ingresar", component: IngresarComponent},
 {path:"registrarse", component: RegistrarseComponent},
 {path:"reg-empresa", component: RegEmpresaComponent},
 {path:"turnero", component: TurneroComponent},
 {path:"perfil", component: PerfilComponent},
];
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})

export class AppRoutingModule { }
