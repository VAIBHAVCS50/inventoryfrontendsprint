import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuserdetailsComponent } from './auserdetails.component';

describe('AuserdetailsComponent', () => {
  let component: AuserdetailsComponent;
  let fixture: ComponentFixture<AuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuserdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
