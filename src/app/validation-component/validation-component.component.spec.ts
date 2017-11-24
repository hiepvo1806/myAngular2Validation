import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationComponentComponent } from './validation-component.component';

describe('ValidationComponentComponent', () => {
  let component: ValidationComponentComponent;
  let fixture: ComponentFixture<ValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
