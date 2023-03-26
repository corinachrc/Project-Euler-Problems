import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemThreeComponent } from './problem-three.component';

describe('ProblemThreeComponent', () => {
  let component: ProblemThreeComponent;
  let fixture: ComponentFixture<ProblemThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
