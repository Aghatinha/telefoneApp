import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JhonPage } from './jhon.page';

describe('JhonPage', () => {
  let component: JhonPage;
  let fixture: ComponentFixture<JhonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JhonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
