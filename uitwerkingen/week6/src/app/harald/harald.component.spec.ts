import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaraldComponent } from './harald.component';

describe('HaraldComponent', () => {
  let component: HaraldComponent;
  let fixture: ComponentFixture<HaraldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaraldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaraldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
