import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffsUpdateComponent } from './staffs-update.component';


describe('StaffsUpdateComponent', () => {
  let component: StaffsUpdateComponent;
  let fixture: ComponentFixture<StaffsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsUpdateComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
