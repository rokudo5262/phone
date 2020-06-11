import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandsPreviewComponent } from './brands-preview.component';

describe('BrandsPreviewComponent', () => {
  let component: BrandsPreviewComponent;
  let fixture: ComponentFixture<BrandsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsPreviewComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
