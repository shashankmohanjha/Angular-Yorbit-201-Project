import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyLocationComponent } from './notify-location.component';

describe('NotifyLocationComponent', () => {
  let component: NotifyLocationComponent;
  let fixture: ComponentFixture<NotifyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
