import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { QuestionarioComponent } from './components/questionario/questionario.component';
const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  {path:"questoes", component: QuestionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
