import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarimgComponent } from './komentarimg.component';

describe('KomentarimgComponent', () => {
  let component: KomentarimgComponent;
  let fixture: ComponentFixture<KomentarimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
