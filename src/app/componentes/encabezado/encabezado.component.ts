import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  pencilIcon = faPen;
 
  constructor(private datosPorfolio:PorfolioService ) { }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.miPorfolio=data;
        });   
  }

}
