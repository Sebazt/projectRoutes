import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  formulario = {
    name: '',
    apellido: '',
    accept: false,
    pais: ''
  };

  countries = [
    'Colombia',
    'Argentina',
    'Canada',
    'Noruega',
    'Belgica'
  ]

  constructor() {}

  ngOnInit(): void {}

  getData(){

    this.countries.push(this.formulario.pais)
    console.log(
      `Nombre: ${this.formulario.name} y Apellido: ${this.formulario.apellido} y el estado del checkbox es: ${this.formulario.accept} y el país que elegiste es ${this.formulario.pais}`
    );
    console.log(this.formulario);
    console.log(this.countries);


  }
}
