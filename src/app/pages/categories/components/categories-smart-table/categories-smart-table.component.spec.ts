import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesSmartTableComponent } from './categories-smart-table.component';

describe('CategoriesSmartTableComponent', () => {
  let component: CategoriesSmartTableComponent;
  let fixture: ComponentFixture<CategoriesSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
