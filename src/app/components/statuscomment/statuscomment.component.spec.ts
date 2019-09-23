import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuscommentComponent } from './statuscomment.component';

describe('StatuscommentComponent', () => {
  let component: StatuscommentComponent;
  let fixture: ComponentFixture<StatuscommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuscommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuscommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
