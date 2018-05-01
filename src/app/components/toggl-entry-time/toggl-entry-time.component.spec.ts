import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglEntryTimeComponent } from './toggl-entry-time.component';

describe('TogglEntryTimeComponent', () => {
  let component: TogglEntryTimeComponent;
  let fixture: ComponentFixture<TogglEntryTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglEntryTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglEntryTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
