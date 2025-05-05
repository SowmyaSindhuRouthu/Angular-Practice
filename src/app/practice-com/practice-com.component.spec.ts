import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComComponent } from './practice-com.component';

describe('PracticeComComponent', () => {
  let component: PracticeComComponent;
  let fixture: ComponentFixture<PracticeComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
