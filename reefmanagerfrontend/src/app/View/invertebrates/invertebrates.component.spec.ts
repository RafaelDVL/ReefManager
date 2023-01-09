import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertebratesComponent } from './invertebrates.component';

describe('InvertebratesComponent', () => {
  let component: InvertebratesComponent;
  let fixture: ComponentFixture<InvertebratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertebratesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertebratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
