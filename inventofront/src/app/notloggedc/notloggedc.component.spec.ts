import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotloggedcComponent } from './notloggedc.component';

describe('NotloggedcComponent', () => {
  let component: NotloggedcComponent;
  let fixture: ComponentFixture<NotloggedcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotloggedcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotloggedcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
