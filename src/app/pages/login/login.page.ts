import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private todo: FormGroup;
  validateUser: string = "";

  formLogin = {
    usuario: "",
    password: ""
  }

  constructor(private router: Router, private storage: Storage, private formBuilder: FormBuilder) { 

    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });

  }

  async ngOnInit() {
    await this.storage.create();
  }

  login() {

    console.log(this.formLogin)

    let datosEnviar: NavigationExtras = {
      queryParams: {
        emailUsuario: this.formLogin.usuario,
        edad: 24
      }
    }

    this.router.navigate(['/home'], datosEnviar);

    //guardar info en el storage
    this.storage.set("nombreUsuario","Juan")
    this.storage.get("")

  }

}
