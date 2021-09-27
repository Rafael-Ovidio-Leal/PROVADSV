import { ListarComponent } from './components/views/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/template/header/header.component';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
//Jogo

const routes: Routes = [
    //USUARIO
    {
      path: "",
      component: HeaderComponent,
    },
    {
      path: "usuario/cadastrar",
      component: CadastrarComponent,
    },
    {
        path: "usuario/listar",
        component: ListarComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
