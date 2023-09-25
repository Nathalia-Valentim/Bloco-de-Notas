import { Component } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {

  constructor(private service: NotaService) { }

  ngOnInit(): void {
    this.service.listar()
  }


  listaNotas:Nota[] = [
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
