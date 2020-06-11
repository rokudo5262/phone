import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersPreviewComponent } from './customers-preview.component';

describe('CustomersPreviewComponent', () => {
  let component: CustomersPreviewComponent;
  let fixture: ComponentFixture<CustomersPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersPreviewComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
