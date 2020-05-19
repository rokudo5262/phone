import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandsSmartTableComponent } from './brands-smart-table.component';


describe('BrandsSmartTableComponent', () => {
  let component: BrandsSmartTableComponent;
  let fixture: ComponentFixture<BrandsSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsSmartTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
