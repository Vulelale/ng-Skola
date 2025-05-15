import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazredComponent } from './razred.component';

describe('RazredComponent', () => {
  let component: RazredComponent;
  let fixture: ComponentFixture<RazredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
