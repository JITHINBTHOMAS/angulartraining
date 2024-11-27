import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawhatsComponent } from './strawhats.component';

describe('StrawhatsComponent', () => {
  let component: StrawhatsComponent;
  let fixture: ComponentFixture<StrawhatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrawhatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrawhatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
