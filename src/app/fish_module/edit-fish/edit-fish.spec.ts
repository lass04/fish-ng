import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFish } from './edit-fish';

describe('EditFish', () => {
  let component: EditFish;
  let fixture: ComponentFixture<EditFish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
