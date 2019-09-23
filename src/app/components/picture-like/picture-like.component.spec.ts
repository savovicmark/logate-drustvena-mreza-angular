import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureLikeComponent } from './picture-like.component';

describe('PictureLikeComponent', () => {
  let component: PictureLikeComponent;
  let fixture: ComponentFixture<PictureLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
