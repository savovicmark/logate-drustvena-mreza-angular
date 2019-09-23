import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLikesComponent } from './status-likes.component';

describe('StatusLikesComponent', () => {
  let component: StatusLikesComponent;
  let fixture: ComponentFixture<StatusLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
