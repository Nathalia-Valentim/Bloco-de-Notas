import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdicionarComponent
  },
  {
    path: 'criar-nota',
    component: CriarNotaComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
