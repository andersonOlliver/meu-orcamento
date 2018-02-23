import {Component, OnInit} from '@angular/core';
import {Lancamento} from '../../model/lancamento';
import {LancamentoService} from '../../service/lancamento.service';
import {CategoriaService} from '../../service/categoria.service';
import {Categoria} from '../../model/categoria';

@Component({
  selector: 'app-adiciona-lancamento',
  templateUrl: './adiciona-lancamento.component.html',
  styleUrls: ['./adiciona-lancamento.component.css']
})
export class AdicionaLancamentoComponent implements OnInit {

  lancamento: Lancamento;
  categorias: Categoria[];

  constructor(private categoriaService: CategoriaService,
              private lancamentoService: LancamentoService) {
  }

  ngOnInit() {
    this.lancamento = new Lancamento(new Date());

    this.categoriaService.getAll()
      .subscribe((res: Categoria[]) => {
        this.categorias = res;
      });
  }

  onSubmit() {

  }
}
