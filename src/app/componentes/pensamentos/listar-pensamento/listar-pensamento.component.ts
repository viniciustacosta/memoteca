import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true
  filtro: string = ''
  favoritos: boolean = false
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu Mural'


  constructor(private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => this.listaPensamentos = listaPensamentos)
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(
      (listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos)
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
      })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(
      (listaPensamentos) => {
        this.listaPensamentos = listaPensamentos
      }
    )
  }

  listarFavoritos(ehFavorito: boolean) {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.favoritos = ehFavorito
    this.titulo = ehFavorito ? ' Meus Favoritos' : 'Meu mural'
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(
      (listaPensamentos) => {
        this.listaPensamentos = listaPensamentos
        this.listaFavoritos = listaPensamentos
      }
    )
  }

  // recarregar() {
  //   this.favoritos = false;
  //   this.paginaAtual = 1
  //   this.router.routeReuseStrategy.shouldReuseRoute = () => false
  //   this.router.onSameUrlNavigation = 'reload'
  //   this.router.navigate([this.router.url])

  // }




}
