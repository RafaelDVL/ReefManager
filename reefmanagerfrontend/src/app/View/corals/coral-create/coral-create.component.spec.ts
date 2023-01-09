import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralCreateComponent } from './coral-create.component';

describe('CoralCreateComponent', () => {
  let component: CoralCreateComponent;
  let fixture: ComponentFixture<CoralCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoralCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoralCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
