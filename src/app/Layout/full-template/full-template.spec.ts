import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTemplate } from './full-template';

describe('FullTemplate', () => {
  let component: FullTemplate;
  let fixture: ComponentFixture<FullTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
