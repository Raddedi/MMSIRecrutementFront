import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillCandComponent } from './detaill-cand.component';

describe('DetaillCandComponent', () => {
  let component: DetaillCandComponent;
  let fixture: ComponentFixture<DetaillCandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillCandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
