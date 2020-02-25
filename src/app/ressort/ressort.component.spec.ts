import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessortComponent } from './ressort.component';

describe('RessortComponent', () => {
  let component: RessortComponent;
  let fixture: ComponentFixture<RessortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
