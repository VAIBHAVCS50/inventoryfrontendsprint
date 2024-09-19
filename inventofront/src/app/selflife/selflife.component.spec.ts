import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelflifeComponent } from './selflife.component';

describe('SelflifeComponent', () => {
  let component: SelflifeComponent;
  let fixture: ComponentFixture<SelflifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelflifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelflifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
