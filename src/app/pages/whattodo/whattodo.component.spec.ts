import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhattodoComponent } from './whattodo.component';

describe('WhattodoComponent', () => {
  let component: WhattodoComponent;
  let fixture: ComponentFixture<WhattodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhattodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhattodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
