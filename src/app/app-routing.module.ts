import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import homeRoutes from './home/home-routing.module';
import { DetalhesPage } from './detalhes/detalhes.page';

const routes: Routes = [
  {
    path: '',
    children: homeRoutes,
  },
  {
    path: 'detalhes',
    component: DetalhesPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
