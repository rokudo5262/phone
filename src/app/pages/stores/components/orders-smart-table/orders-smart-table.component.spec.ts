import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersSmartTableComponent } from './orders-smart-table.component';

describe('OrdersSmartTableComponent', () => {
  let component: OrdersSmartTableComponent;
  let fixture: ComponentFixture<OrdersSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSmartTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
