import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPostsComponent } from './preview-posts.component';

describe('PreviewPostsComponent', () => {
  let component: PreviewPostsComponent;
  let fixture: ComponentFixture<PreviewPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
