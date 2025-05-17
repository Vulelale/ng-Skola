import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjaEditComponent } from './odeljenja-edit.component';

describe('OdeljenjaEditComponent', () => {
  let component: OdeljenjaEditComponent;
  let fixture: ComponentFixture<OdeljenjaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdeljenjaEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdeljenjaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
