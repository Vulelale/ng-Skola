import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjaViewComponent } from './odeljenja-view.component';

describe('OdeljenjaViewComponent', () => {
  let component: OdeljenjaViewComponent;
  let fixture: ComponentFixture<OdeljenjaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdeljenjaViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdeljenjaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
