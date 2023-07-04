import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveScenesComponent } from './active-scenes.component';

describe('ActiveScenesComponent', () => {
  let component: ActiveScenesComponent;
  let fixture: ComponentFixture<ActiveScenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveScenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
