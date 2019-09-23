import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStatusesComponent } from './my-statuses.component';

describe('MyStatusesComponent', () => {
  let component: MyStatusesComponent;
  let fixture: ComponentFixture<MyStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
