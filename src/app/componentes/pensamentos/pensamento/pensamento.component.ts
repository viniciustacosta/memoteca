import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit {

  // pensamento = {
  //   conteudo: "Teste",
  //   autoria: 'Dev',
  //   modelo: 'modelo2'
  // }

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: '',
    modelo: ''
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }


  constructor() { }

  ngOnInit(): void {
  }
}
