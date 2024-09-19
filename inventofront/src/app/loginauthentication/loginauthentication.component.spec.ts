import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginauthenticationComponent } from './loginauthentication.component';

describe('LoginauthenticationComponent', () => {
  let component: LoginauthenticationComponent;
  let fixture: ComponentFixture<LoginauthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginauthenticationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
