import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class CaixaNotaComponent {

  listaNotas = [
    {
    titulo: "BBBBB",
    conteudo:"Deu cali",
    tipo: "tipo2"
  },
  {
    titulo: "CCCCCC",
    conteudo:"Deu cali",
    tipo: "tipo3"
  }
   ];
} /*n sei se é aqui*/
