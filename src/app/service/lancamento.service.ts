import {Injectable} from '@angular/core';
import {Lancamento} from '../model/lancamento';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class LancamentoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.api_endpoint}lancamento`;
  }


  getAll() {
    return this.http.get(this.url);
  }


  adicionar(lancamento: Lancamento) {
    return this.http.post(this.url, lancamento);
  }

}
