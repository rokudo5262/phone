import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandsAddComponent } from './customers-add.component';


describe('BrandsAddComponent', () => {
  let component: BrandsAddComponent;
  let fixture: ComponentFixture<BrandsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsAddComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
