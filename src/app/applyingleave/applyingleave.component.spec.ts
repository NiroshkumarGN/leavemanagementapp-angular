import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyingleaveComponent } from './applyingleave.component';

describe('ApplyingleaveComponent', () => {
  let component: ApplyingleaveComponent;
  let fixture: ComponentFixture<ApplyingleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyingleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyingleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
