import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglEntryActionComponent } from './toggl-entry-action.component';

describe('TogglEntryActionComponent', () => {
  let component: TogglEntryActionComponent;
  let fixture: ComponentFixture<TogglEntryActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglEntryActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglEntryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
