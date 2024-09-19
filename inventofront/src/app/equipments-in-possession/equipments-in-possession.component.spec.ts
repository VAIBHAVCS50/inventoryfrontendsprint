import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsInPossessionComponent } from './equipments-in-possession.component';

describe('EquipmentsInPossessionComponent', () => {
  let component: EquipmentsInPossessionComponent;
  let fixture: ComponentFixture<EquipmentsInPossessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentsInPossessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentsInPossessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
