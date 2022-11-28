import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProvinciaSelectComponent } from './provincia-select/provincia-select.component';


const routes: Routes = [
{
  path:'',
  component:ProvinciaSelectComponent, // component
},
{
  path:':listaProducto',
  component:ProductListComponent, // component,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
