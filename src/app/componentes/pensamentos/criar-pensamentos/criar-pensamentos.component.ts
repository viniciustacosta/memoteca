import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  formulario!: FormGroup;
  id!: number;


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      conteudo: ['', [
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ]],
      autoria: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      modelo: ['', Validators.required],
      favorito: [false]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = parseInt(id);
      this.service.buscarPorId(this.id).subscribe((pensamento) => {
        this.formulario.patchValue(pensamento);
      });
    }
  }



  criarPensamento() {
    // console.log(this.formulario.value.id)
    if (this.formulario.value.id) {
      alert("Pensamento editado com sucesso!")
      this.service.editar(this.formulario.value).subscribe(() =>
        this.router.navigate(['/listarPensamento']))
    } else {
      // console.log(this.formulario.value)
      alert("Novo pensamento criado!")
      this.service.criar(this.formulario.value).subscribe(() =>
        this.router.navigate(['/listarPensamento']))

    }


  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
    alert("Ação cancelada!")
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
