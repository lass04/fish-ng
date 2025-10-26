import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fishdetail } from './fishdetail';

describe('Fishdetail', () => {
  let component: Fishdetail;
  let fixture: ComponentFixture<Fishdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fishdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fishdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
