import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileImagesComponent } from './my-profile-images.component';

describe('MyProfileImagesComponent', () => {
  let component: MyProfileImagesComponent;
  let fixture: ComponentFixture<MyProfileImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
