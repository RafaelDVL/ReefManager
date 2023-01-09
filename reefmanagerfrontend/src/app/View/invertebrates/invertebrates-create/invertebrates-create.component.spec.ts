import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertebratesCreateComponent } from './invertebrates-create.component';

describe('InvertebratesCreateComponent', () => {
  let component: InvertebratesCreateComponent;
  let fixture: ComponentFixture<InvertebratesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertebratesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertebratesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
