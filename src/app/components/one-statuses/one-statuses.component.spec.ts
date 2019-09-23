import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStatusesComponent } from './one-statuses.component';

describe('OneStatusesComponent', () => {
  let component: OneStatusesComponent;
  let fixture: ComponentFixture<OneStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
