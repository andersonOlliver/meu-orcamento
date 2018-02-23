import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaCategoriaComponent } from './adiciona-categoria.component';

describe('AdicionaCategoriaComponent', () => {
  let component: AdicionaCategoriaComponent;
  let fixture: ComponentFixture<AdicionaCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
