import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: false,
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) =>
      this.pensamento = pensamento
    )
  }

  excluirPensamento() {
    console.log(this.pensamento)
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() =>
        this.router.navigate(['/listarPensamento']))
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
    alert("Ação cancelada!")
  }


}
