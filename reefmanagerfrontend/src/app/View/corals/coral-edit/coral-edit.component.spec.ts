import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralEditComponent } from './coral-edit.component';

describe('CoralEditComponent', () => {
  let component: CoralEditComponent;
  let fixture: ComponentFixture<CoralEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoralEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoralEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
