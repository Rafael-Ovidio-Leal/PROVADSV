
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/template/header/header.component';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/listar/listar.component';
//Jogo

const routes: Routes = [
    //USUARIO
    {
      path: "",
      component: HeaderComponent,
    },
    {
      path: "livro/cadastrar",
      component: CadastrarComponent,
    },
    {
        path: "livro/listar",
        component: ListarComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
