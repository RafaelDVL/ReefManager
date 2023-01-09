import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertebratesEditComponent } from './invertebrates-edit.component';

describe('InvertebratesEditComponent', () => {
  let component: InvertebratesEditComponent;
  let fixture: ComponentFixture<InvertebratesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertebratesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertebratesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
