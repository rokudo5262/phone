import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffsPreviewComponent } from './staffs-preview.component';

describe('StaffsPreviewComponent', () => {
  let component: StaffsPreviewComponent;
  let fixture: ComponentFixture<StaffsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
