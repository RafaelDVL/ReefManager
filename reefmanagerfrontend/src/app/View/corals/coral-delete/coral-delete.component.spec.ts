import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralDeleteComponent } from './coral-delete.component';

describe('CoralDeleteComponent', () => {
  let component: CoralDeleteComponent;
  let fixture: ComponentFixture<CoralDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoralDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoralDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
