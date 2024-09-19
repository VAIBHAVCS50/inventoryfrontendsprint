import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatepassHistoryComponent } from './gatepass-history.component';

describe('GatepassHistoryComponent', () => {
  let component: GatepassHistoryComponent;
  let fixture: ComponentFixture<GatepassHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GatepassHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GatepassHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
