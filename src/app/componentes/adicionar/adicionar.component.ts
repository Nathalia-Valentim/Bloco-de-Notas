import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {
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
}
