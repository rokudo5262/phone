import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersSmartTableComponent } from './customers-smart-table.component';

describe('CustomersSmartTableComponent', () => {
  let component: CustomersSmartTableComponent;
  let fixture: ComponentFixture<CustomersSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersSmartTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
