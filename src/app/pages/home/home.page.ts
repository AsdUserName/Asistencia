import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { BrowserMultiFormatReader, Result } from '@zxing/library';
import { format } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private codeReader: BrowserMultiFormatReader;
  mensaje: string = "";
  fechaHoy: string = "";
  showQRImage: boolean = true;

  constructor(
    private rutaActiva : ActivatedRoute, 
    private storage:Storage,
    private zone: NgZone
    ) {

      this.codeReader = new BrowserMultiFormatReader();
    
      this.rutaActiva.queryParams.subscribe(params =>{

        if(params['nameUsuario'])
        {
          this.mensaje = params['nameUsuario'];
        }
    })

    this.fechaHoy = format(new Date(), 'dd/MM/yyyy');

  }

  startScanner() {
    this.showQRImage = false; // Oculta la imagen del código QR al iniciar el escáner

    this.codeReader
      .decodeOnceFromVideoDevice(undefined, 'video')
      .then((result: Result) => {
        this.zone.run(() => {
          // Manejar el resultado del escaneo QR, por ejemplo, mostrarlo en la consola
          console.log('QR escaneado:', result.getText());
          this.showQRImage = true; // Vuelve a mostrar la imagen del código QR después de escanear
        });
      })
      .catch((err) => {
        console.error('Error al iniciar el escáner:', err);
        this.showQRImage = true; // Asegúrate de mostrar la imagen del código QR en caso de error
      });
  }

  ionViewDidEnter() {
    this.startScanner();
  }

  ionViewWillLeave() {
    this.codeReader.reset();
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
