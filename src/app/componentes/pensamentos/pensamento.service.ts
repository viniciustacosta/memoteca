import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'
  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]> {
    const itensPorPagina = 3;

    let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina)

    if (filtro.trim().length > 3) {
      params = params.set("q", filtro)
    }

    if (favoritos) {
      params = params.set('favorito', true)
    }

    // return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`)
    return this.http.get<Pensamento[]>(this.API, { params })
  }

  // listarFavoritos(pagina: number, filtro: string): Observable<Pensamento[]> {
  //   const itensPorPagina = 3;

  //   let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina).set("favorito", true)

  //   if (filtro.trim().length > 3) {
  //     params = params.set("q", filtro)
  //   }

  //   return this.http.get<Pensamento[]>(this.API, { params })

  // }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  favoritar(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }




}
