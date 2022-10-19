import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsPostsComponent } from './lists-posts.component';

describe('ListsPostsComponent', () => {
  let component: ListsPostsComponent;
  let fixture: ComponentFixture<ListsPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
