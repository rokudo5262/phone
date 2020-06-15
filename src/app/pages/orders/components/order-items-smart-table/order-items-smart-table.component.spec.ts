import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderItemsSmartTableComponent } from './order-items-smart-table.component';

describe('OrderItemsSmartTableComponent', () => {
  let component: OrderItemsSmartTableComponent;
  let fixture: ComponentFixture<OrderItemsSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemsSmartTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemsSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
