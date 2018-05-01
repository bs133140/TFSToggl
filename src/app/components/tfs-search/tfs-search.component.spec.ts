import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfsSearchComponent } from './tfs-search.component';

describe('TfsSearchComponent', () => {
  let component: TfsSearchComponent;
  let fixture: ComponentFixture<TfsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
