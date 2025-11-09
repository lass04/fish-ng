import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFish } from './search-fish';

describe('SearchFish', () => {
  let component: SearchFish;
  let fixture: ComponentFixture<SearchFish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
