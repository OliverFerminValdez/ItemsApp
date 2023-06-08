import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  {
      path:'',
      children:[
          {
            path: 'listado',
            component: ListadoComponent
          },
          {
            path: 'agregar',
            component: AgregarComponent
          },
          {
            path: 'editar/:id',
            component: AgregarComponent
          },
          {
            path: ':id',
            component: ItemComponent
          },
          {
            path: '**',
            component: ListadoComponent
          }
        
      ]

  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
}) 
export class ItemsRoutingModule { }
