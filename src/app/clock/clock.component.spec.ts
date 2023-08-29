import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLockComponent } from './clock.component';

describe('CLockComponent', () => {
  let component: CLockComponent;
  let fixture: ComponentFixture<CLockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
