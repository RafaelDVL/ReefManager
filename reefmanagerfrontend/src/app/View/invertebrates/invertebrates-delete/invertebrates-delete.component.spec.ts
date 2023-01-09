import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertebratesDeleteComponent } from './invertebrates-delete.component';

describe('InvertebratesDeleteComponent', () => {
  let component: InvertebratesDeleteComponent;
  let fixture: ComponentFixture<InvertebratesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertebratesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertebratesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
