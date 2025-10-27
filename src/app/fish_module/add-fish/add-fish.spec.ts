import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFish } from './add-fish';

describe('AddFish', () => {
  let component: AddFish;
  let fixture: ComponentFixture<AddFish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
