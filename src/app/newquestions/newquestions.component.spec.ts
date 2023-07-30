import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewquestionsComponent } from './newquestions.component';

describe('NewquestionsComponent', () => {
  let component: NewquestionsComponent;
  let fixture: ComponentFixture<NewquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
