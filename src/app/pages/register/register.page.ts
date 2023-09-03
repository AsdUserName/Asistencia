import { Component, OnInit } from '@angular/core';
import { getName } from 'ionicons/dist/types/components/icon/utils';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister = {
    nombre: "",
    apellido: "",
    email: "",
    password: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {

    console.log(this.formRegister)

    let datosEnviarLog: NavigationExtras = {
      queryParams: {
        nameUser: this.formRegister.nombre,
        lastNameUsar: this.formRegister.apellido,
        emailUser: this.formRegister.email,
        passwordUser: this.formRegister.password
      }
    }

    this.router.navigate(['/home', datosEnviarLog]);

  }

}
