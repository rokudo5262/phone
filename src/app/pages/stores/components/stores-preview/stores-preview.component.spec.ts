import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoresPreviewComponent } from './stores-preview.component';

describe('StoresPreviewComponent', () => {
  let component: StoresPreviewComponent;
  let fixture: ComponentFixture<StoresPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresPreviewComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
