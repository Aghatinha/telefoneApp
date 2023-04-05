import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedroPage } from './pedro.page';

describe('PedroPage', () => {
  let component: PedroPage;
  let fixture: ComponentFixture<PedroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
