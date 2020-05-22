import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersUpdateComponent } from './customers-update.component';


describe('CustomersUpdateComponent', () => {
  let component: CustomersUpdateComponent;
  let fixture: ComponentFixture<CustomersUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersUpdateComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
