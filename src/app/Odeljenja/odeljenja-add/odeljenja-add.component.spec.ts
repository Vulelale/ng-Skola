import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjaAddComponent } from './odeljenja-add.component';

describe('OdeljenjaAddComponent', () => {
  let component: OdeljenjaAddComponent;
  let fixture: ComponentFixture<OdeljenjaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdeljenjaAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdeljenjaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
