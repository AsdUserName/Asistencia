import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensaje: string = "";

  constructor(private rutaActiva : ActivatedRoute, private storage:Storage) {

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['nameUsuario'])
      {
        this.mensaje = params['nameUsuario'];
      }
    })
  }

  accionDelBoton() {
    // Aquí puedes agregar el código para manejar la acción del botón
  }

  ngOnInit() {
    
  }

  async verStorage(){
    let usuario = await this.storage.get('usuario');
    console.log("El usuario guardado es:"+ usuario)
  }

}
