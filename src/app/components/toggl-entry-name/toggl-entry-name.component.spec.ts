import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglEntryNameComponent } from './toggl-entry-name.component';

describe('TogglEntryNameComponent', () => {
  let component: TogglEntryNameComponent;
  let fixture: ComponentFixture<TogglEntryNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglEntryNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglEntryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
