import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesGeneralComponent } from './publicaciones-general.component';

describe('PublicacionesGeneralComponent', () => {
  let component: PublicacionesGeneralComponent;
  let fixture: ComponentFixture<PublicacionesGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
