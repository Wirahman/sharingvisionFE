import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';
import { ModalsComponent } from './modals/modals.component';
import { ListsPostsComponent } from './posts/lists-posts/lists-posts.component';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';
import { PreviewPostsComponent } from './posts/preview-posts/preview-posts.component';
import { EditPostsComponent } from './posts/edit-posts/edit-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ModalsComponent,
    ListsPostsComponent,
    AddPostsComponent,
    PreviewPostsComponent,
    EditPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule, 
    CdsModule, 
    BrowserAnimationsModule,
    NgbModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ClarityModule,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
