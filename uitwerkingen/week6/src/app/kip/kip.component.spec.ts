import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KipComponent } from './kip.component';

describe('KipComponent', () => {
  let component: KipComponent;
  let fixture: ComponentFixture<KipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
