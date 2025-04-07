import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

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

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  criarPensamento() {
    console.log(this.pensamento)
    alert("Novo pensamento criado!")
    this.service.criar(this.pensamento).subscribe(() =>
      this.router.navigate(['/listarPensamento']))
  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
    alert("Ação cancelada!")
  }
  constructor(private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
}
