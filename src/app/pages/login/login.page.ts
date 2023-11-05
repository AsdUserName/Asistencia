import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthenticationService } from 'src/app/servicios/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isAlertOpen = false;
  public alertButtons = ['OK'];
auth: any;

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  formLogin = {
    usuario: "",
    password: ""
  }

  datosReg: string = "";

  constructor(private router: Router,
     private storage: Storage,
      private rutaActiva : ActivatedRoute,
       private authService: AuthenticationService) { 

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['nameUsuario'])
      {
        this.datosReg = params['nameUsuario'];
      }
    })

  }

  async ngOnInit() {
    await this.storage.create();
  }

  login() {
    this.authService.login(this.formLogin.usuario, this.formLogin.password);

    let datosEnviar: NavigationExtras = {
      queryParams: {
        nameUsuario: this.formLogin.usuario
      }
    }

    
    this.router.navigate(['/home'], datosEnviar);
    
    //guardar info en el storage
    this.storage.set("usuario","Juan");
    this.storage.get("usuario");
    
  }

}
