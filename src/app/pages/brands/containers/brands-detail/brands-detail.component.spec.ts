import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandsDetailComponent } from './brands-detail.component';


describe('BrandsDetailComponent', () => {
  let component: BrandsDetailComponent;
  let fixture: ComponentFixture<BrandsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsDetailComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
