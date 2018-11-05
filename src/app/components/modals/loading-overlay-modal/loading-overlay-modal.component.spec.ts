import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingOverlayModalComponent } from './loading-overlay-modal.component';

describe('LoadingOverlayModalComponent', () => {
  let component: LoadingOverlayModalComponent;
  let fixture: ComponentFixture<LoadingOverlayModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingOverlayModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingOverlayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
