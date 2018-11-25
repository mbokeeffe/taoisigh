import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoiseachComponent } from './taoiseach.component';

describe('TaoiseachComponent', () => {
  let component: TaoiseachComponent;
  let fixture: ComponentFixture<TaoiseachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoiseachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoiseachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
