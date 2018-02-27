import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

  private errors: string[];
  public eventError: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {
  }

  public emitirErros(erros: string[]) {
    this.errors = erros;
    this.eventError.emit(this.errors);
  }
}
