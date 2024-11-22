import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WFDesignerComponent } from './WFDesignerContainer.component';

describe('WFDesignerComponent', () => {
  let component: WFDesignerComponent;
  let fixture: ComponentFixture<WFDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WFDesignerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WFDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
