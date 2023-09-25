import { Component, Input } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-caixa-nota',
  templateUrl: './caixa-nota.component.html',
  styleUrls: ['./caixa-nota.component.css']
})

export class CaixaNotaComponent {
  @Input() nota:Nota = {
    id: 0,
    titulo: "",
    conteudo:"",
    tipo: ""
  }
}
