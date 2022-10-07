import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CopyComponent } from './componentes/copy/copy.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducBaseComponent } from './componentes/educ-base/educ-base.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncabezadoComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    TrabajosComponent,
    FooterComponent,
    CopyComponent,
    EducBaseComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
