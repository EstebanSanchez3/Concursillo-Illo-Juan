import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaFacilComponent} from './listaFacil/listaFacil.component';
import { ListaMediaComponent } from './lista-media/lista-media.component';
import { ListadificilComponent } from './listadificil/listadificil.component';




const rutas:Routes = [
  {path:"", component:ListaFacilComponent},
  {path:"lista-media", component:ListaMediaComponent},
  {path:"listadificil", component:ListadificilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaFacilComponent,
    ListaMediaComponent,
    ListadificilComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
