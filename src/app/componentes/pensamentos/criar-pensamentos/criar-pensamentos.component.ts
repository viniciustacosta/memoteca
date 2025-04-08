import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: false,
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css'
})
export class CriarPensamentosComponent implements OnInit {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: ['DevAngular'],
      modelo: ['modelo3'],
    })
  }

  formulario!: FormGroup;

  criarPensamento() {
    console.log(this.formulario.value)
    alert("Novo pensamento criado!")
    this.service.criar(this.formulario.value).subscribe(() =>
      this.router.navigate(['/listarPensamento']))
  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
    alert("Ação cancelada!")
  }
}
