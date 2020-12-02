import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Pacote',
    apellido: 'Marmolejo',
    correo: 'paco2k@live.com',
    pais: 'MEX',
    genero: 'masculino',
  }

  paises: any[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {

    this.paisService.getPaises()
    .subscribe( paises =>{
      this.paises = paises;
      this.paises.unshift({
        nombre: '[Seleccione un país]',
        pais: 'MEX',
        genero: '',
      });
    });
  }

  guardar(forma: NgForm){
    
    if(forma.invalid){
      Object.values(forma.controls).forEach( control =>{
        control.markAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }

}
