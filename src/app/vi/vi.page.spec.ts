import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViPage } from './vi.page';

describe('ViPage', () => {
  let component: ViPage;
  let fixture: ComponentFixture<ViPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
