import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriessUpdateComponent } from './categories-update.component';

describe('CategoriessUpdateComponent', () => {
  let component: CategoriessUpdateComponent;
  let fixture: ComponentFixture<CategoriessUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriessUpdateComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriessUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
