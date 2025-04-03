import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: false,
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css'
})
export class CriarPensamentosComponent implements OnInit {
  // pensamento = {
  //   id: '1',
  //   conteudo: 'Aprendendo Angular',
  //   autoria: 'Dev',
  //   modelo: ''
  // }

  pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  criarPensamento() {
    console.log(this.pensamento)
    alert("Novo pensamento criado!")
  }
  cancelar() {

    alert("Ação cancelada!")
  }
  constructor() { }

  ngOnInit(): void {

  }
}
