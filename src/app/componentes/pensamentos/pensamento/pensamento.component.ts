import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

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
    modelo: '',
    favorito: false
  }

  constructor(private service: PensamentoService

  ) { }

  ngOnInit(): void {
  }

  @Input() listaFavoritos: Pensamento[] = []

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito) {
      return 'ativo'
    } else {
      return 'inativo'
    }
  }

  favoritar() {
    this.service.favoritar(this.pensamento).subscribe(
      () => {
        this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
      }
    );
    // alert("Pensamento favoritado!")
  }



}
