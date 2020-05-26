import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoresSmartTableComponent } from './stores-smart-table.component';

describe('StoresSmartTableComponent', () => {
  let component: StoresSmartTableComponent;
  let fixture: ComponentFixture<StoresSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresSmartTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
