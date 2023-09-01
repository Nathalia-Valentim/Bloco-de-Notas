import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caixa-nota',
  templateUrl: './caixa-nota.component.html',
  styleUrls: ['./caixa-nota.component.css']
})

export class CaixaNotaComponent {
  @Input() nota = {
    titulo: "AAAAAAA",
    conteudo:"TESTE",
    tipo: "tipo1"
  }
}
