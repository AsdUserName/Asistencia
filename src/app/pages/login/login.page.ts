import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validateUser: string = "";

  formLogin = {
    email: "",
    password: ""
  }

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  login() {

    console.log(this.formLogin)

    let datosEnviar: NavigationExtras = {
      queryParams: {
        emailUsuario:this.formLogin.email,
        edad: 24
      }
    }

    this.router.navigate(['/home'], datosEnviar);

    //guardar info en el storage
    this.storage.set("nombreUsuario","Juan")
    this.storage.get("")

  }

}
