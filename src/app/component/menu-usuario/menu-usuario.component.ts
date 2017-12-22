import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  @Input() isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
