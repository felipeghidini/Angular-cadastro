import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UsertableComponent } from './views/usertable/usertable.component';
import { FotosComponent } from './views/fotos/fotos.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent       
  }, 
  {
    path: 'usuarios',
    component: UsertableComponent
  },
  {
    path: 'fotos',
    component: FotosComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
