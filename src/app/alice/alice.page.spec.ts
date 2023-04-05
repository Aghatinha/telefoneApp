import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlicePage } from './alice.page';

describe('AlicePage', () => {
  let component: AlicePage;
  let fixture: ComponentFixture<AlicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
