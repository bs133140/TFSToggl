import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfsTreeListComponent } from './tfs-tree-list.component';

describe('TfsTreeListComponent', () => {
  let component: TfsTreeListComponent;
  let fixture: ComponentFixture<TfsTreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfsTreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfsTreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
