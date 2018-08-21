import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrigueComponent } from './intrigue.component';

describe('IntrigueComponent', () => {
  let component: IntrigueComponent;
  let fixture: ComponentFixture<IntrigueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrigueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
