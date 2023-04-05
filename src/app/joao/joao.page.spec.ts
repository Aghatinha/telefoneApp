import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoaoPage } from './joao.page';

describe('JoaoPage', () => {
  let component: JoaoPage;
  let fixture: ComponentFixture<JoaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JoaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
