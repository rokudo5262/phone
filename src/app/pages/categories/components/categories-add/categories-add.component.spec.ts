import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriessAddComponent } from './categories-add.component';

describe('CategoriessAddComponent', () => {
  let component: CategoriessAddComponent;
  let fixture: ComponentFixture<CategoriessAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriessAddComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriessAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
