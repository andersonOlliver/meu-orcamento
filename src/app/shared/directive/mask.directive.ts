import {
  Directive,
  OnInit,
  Input,
  Output,
  HostListener,
  ElementRef,
  EventEmitter, AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective implements OnInit, AfterViewInit {

  @Input('appMask')
  private appMask: string;

  @Output()
  public ngModelChange = new EventEmitter();

  @Input('mascaraPatternsOpcional')
  mascaraPatternsOpcional: any = {};

  private elementRef: ElementRef;
  private mascaraCaracteresEspeciais: string[] = ['/', '(', ')', '.', ':', '-', ' ', '+'];
  private mascaraPatterns: { [key: string]: RegExp } = {
    '0': /\d/,
    '9': /\d/,
    'A': /[a-zA-Z0-9]/,
    'S': /[a-zA-Z]/
  };

  @HostListener('input')
  public onInput() {
    const itemMascaraAplicada = this.aplicarMascara(this.elementRef.nativeElement.value, this.appMask);
    this.elementRef.nativeElement.value = itemMascaraAplicada;
    this.ngModelChange.emit(itemMascaraAplicada);
  }

  ngOnInit() {
    const itemMascaraAplicada = this.aplicarMascara(this.elementRef.nativeElement.value, this.appMask);
    this.ngModelChange.emit(itemMascaraAplicada);
  }

  ngAfterViewInit() {
    this.mascaraPatterns = Object.assign({}, this.mascaraPatterns, this.mascaraPatternsOpcional);
  }

  public constructor(_elementRef: ElementRef) {
    this.elementRef = _elementRef;
  }

  private aplicarMascara(inputValue: string, maskExpression: string): string {
    let cursor = 0;
    let retorno = '';
    const inputArray = inputValue.split('');
    for (let i = 0, inputSymbol = inputArray[0];
         i < inputArray.length;
         i++, inputSymbol = inputArray[i]) {
      if (retorno.length === maskExpression.length) {
        break;
      }

      if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
        retorno += inputSymbol;
        cursor++;
      } else if (this.mascaraCaracteresEspeciais.indexOf(maskExpression[cursor]) !== -1) {
        retorno += maskExpression[cursor];
        cursor++;
        i--;
      } else if (maskExpression[cursor] === '9') {
        cursor++;
        i--;
      }
    }

    if (retorno.length + 1 === maskExpression.length
      && this.mascaraCaracteresEspeciais.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
      retorno += maskExpression[maskExpression.length - 1];
    }

    return retorno;
  }

  private _checkSymbolMask(inputSymbol: string, maskSymbol: string): boolean {
    return inputSymbol === maskSymbol
      || this.mascaraPatterns[maskSymbol]
      && this.mascaraPatterns[maskSymbol].test(inputSymbol);
  }

}
