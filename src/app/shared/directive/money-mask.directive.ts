import {Directive, ElementRef, HostListener} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Directive({
  selector: '[appMoneyMask]'
})
export class MoneyMaskDirective {

  private elementRef: ElementRef;
  private appMask = '###.###.###.###,##';

  private mascaraCaracteresEspeciais: string[] = ['/', '(', ')', '.', ':', '-', ' ', '+', ','];
  private mascaraPatterns: { [key: string]: RegExp } = {
    '0': /\d/,
    '9': /\d/,
    'A': /[a-zA-Z0-9]/,
    'S': /[a-zA-Z]/
  };

  public constructor(_elementRef: ElementRef) {
    this.elementRef = _elementRef;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyup($event) {
    const inputValue = this.elementRef.nativeElement.value;
    const txt = inputValue.replace(/[^\d]+/gi, '');
    const inputArray = inputValue.split('');
    console.log(txt);
    console.log(inputArray.reverse());
    let result = '';
    if (inputValue.length < 2) {
      this.elementRef.nativeElement.value = inputValue;
    } else {
      for (let i = txt.length; i > 0; i--) {
        if (this.appMask.charAt(i) !== '#') {
          result += this.appMask.charAt(i);
        } else {
          result += txt.charAt(i);
        }
      }
    }

    // const data = this.aplicarMascara(this.elementRef.nativeElement.value, this.appMask);

  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    console.log($event);
  }


  private aplicarMascara(inputValue: string, maskExpression: string): string {
    let retorno = '';

    const size = inputValue.length;
    const inputArray = inputValue.split('');

    for (let i = size; i > 0; i--) {
      if (i === 2 && isNullOrUndefined(inputValue.indexOf(',') === 0)) {
        retorno = ',' + retorno;
      }
      retorno = retorno + inputArray[i - 1];
    }

    return retorno;
  }


  private _checkSymbolMask(inputSymbol: string, maskSymbol: string): boolean {
    return inputSymbol === maskSymbol
      || this.mascaraPatterns[maskSymbol]
      && this.mascaraPatterns[maskSymbol].test(inputSymbol);
  }
}
