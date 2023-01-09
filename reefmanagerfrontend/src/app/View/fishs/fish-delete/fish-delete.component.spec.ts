import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishDeleteComponent } from './fish-delete.component';

describe('FishDeleteComponent', () => {
  let component: FishDeleteComponent;
  let fixture: ComponentFixture<FishDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
