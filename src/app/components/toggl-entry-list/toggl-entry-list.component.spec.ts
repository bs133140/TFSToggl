import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglEntryListComponent } from './toggl-entry-list.component';

describe('TogglEntryListComponent', () => {
  let component: TogglEntryListComponent;
  let fixture: ComponentFixture<TogglEntryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglEntryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
