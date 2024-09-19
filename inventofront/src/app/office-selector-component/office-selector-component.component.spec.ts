import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSelectorComponentComponent } from './office-selector-component.component';

describe('OfficeSelectorComponentComponent', () => {
  let component: OfficeSelectorComponentComponent;
  let fixture: ComponentFixture<OfficeSelectorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficeSelectorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfficeSelectorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
