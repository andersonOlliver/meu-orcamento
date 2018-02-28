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
  pt: any;

  constructor(private categoriaService: CategoriaService,
              private lancamentoService: LancamentoService) {
  }

  ngOnInit() {
    this.lancamento = new Lancamento(new Date());

    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Today',
      clear: 'Clear'
    };

    this.categoriaService.getAll()
      .subscribe((res: Categoria[]) => {
        this.categorias = res;
      });
  }

  onSubmit() {

  }
}
