import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffsSmartTableComponent } from './staffs-smart-table.component';


describe('StaffsSmartTableComponent', () => {
  let component: StaffsSmartTableComponent;
  let fixture: ComponentFixture<StaffsSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsSmartTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
