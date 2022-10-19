import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListsPostsComponent } from './posts/lists-posts/lists-posts.component';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';
import { EditPostsComponent } from './posts/edit-posts/edit-posts.component';
import { PreviewPostsComponent } from './posts/preview-posts/preview-posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'List', component: ListsPostsComponent },
  { path: 'Add', component: AddPostsComponent },
  { path: 'Edit/:id', component: EditPostsComponent },
  { path: 'Preview', component: PreviewPostsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }