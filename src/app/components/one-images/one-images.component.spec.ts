import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneImagesComponent } from './one-images.component';

describe('OneImagesComponent', () => {
  let component: OneImagesComponent;
  let fixture: ComponentFixture<OneImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
