import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaPrincipalComponent } from './clima-principal.component';

describe('ClimaPrincipalComponent', () => {
  let component: ClimaPrincipalComponent;
  let fixture: ComponentFixture<ClimaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
