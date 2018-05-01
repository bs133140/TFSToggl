import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfsBugsComponent } from './tfs-bugs.component';

describe('TfsBugsComponent', () => {
  let component: TfsBugsComponent;
  let fixture: ComponentFixture<TfsBugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfsBugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfsBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
