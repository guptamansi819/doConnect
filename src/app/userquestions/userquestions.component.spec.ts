import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserquestionsComponent } from './userquestions.component';

describe('UserquestionsComponent', () => {
  let component: UserquestionsComponent;
  let fixture: ComponentFixture<UserquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
