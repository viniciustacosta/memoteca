import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  standalone: false,
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit {
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) =>
      this.pensamento = pensamento
    )
  }

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  editarPensamento() {
    console.log(this.pensamento)
    if (this.pensamento.id) {
      this.service.editar(this.pensamento).subscribe(() =>
        this.router.navigate(['/listarPensamento']))
    }
  }


  cancelar() {
    this.router.navigate(['/listarPensamento'])
    alert("Ação cancelada!")
  }
}
