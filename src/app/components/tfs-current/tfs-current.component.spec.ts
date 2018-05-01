import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfsCurrentComponent } from './tfs-current.component';

describe('TfsCurrentComponent', () => {
  let component: TfsCurrentComponent;
  let fixture: ComponentFixture<TfsCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfsCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfsCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
