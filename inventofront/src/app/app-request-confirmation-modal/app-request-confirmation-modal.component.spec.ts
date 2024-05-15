import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRequestConfirmationModalComponent } from './app-request-confirmation-modal.component';

describe('AppRequestConfirmationModalComponent', () => {
  let component: AppRequestConfirmationModalComponent;
  let fixture: ComponentFixture<AppRequestConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppRequestConfirmationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppRequestConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
