import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

// Clarity Design
import '@cds/core/forms/register.js';
import '@cds/core/input/register.js';
import '@cds/core/password/register.js';
import '@cds/core/button/register.js';
import { ClarityIcons, plusIcon, pencilIcon, trashIcon } from '@cds/core/icon';

// Component Library
import { AppComponent } from '../../app.component';
import { PopupComponent } from '../../popup/popup.component';
import { PostsModule } from '../model/posts.module';
import { PostsService } from '../services/posts.service';

import { ModalsComponent } from '../../modals/modals.component';
@Component({
  selector: 'app-lists-posts',
  templateUrl: './lists-posts.component.html',
  styleUrls: ['./lists-posts.component.css']
})

export class ListsPostsComponent implements OnInit, AfterViewInit  {
  @ViewChild(PopupComponent) popupComponent!: PopupComponent;
  @ViewChild(ModalsComponent) modal: ModalsComponent | undefined;

  posts: any = [];
  currentIndex = -1;
  pages: 0 = 0;
  title = '';
  page = 0;
  count = 0;
  pageSize = 3;

  status = 'publish';
  jumlahData = '';
  
  closeResult: string | undefined;
  
  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private postsService: PostsService,
    private _snackBar: MatSnackBar,
    private renderer:Renderer2,
    private el:ElementRef
  ) { }

  ngOnInit(): void {
    this.getSemuaPosts();
    ClarityIcons.addIcons(plusIcon, pencilIcon, trashIcon);
  }
  
  public ngAfterViewInit(): void {
    if(this.popupComponent == undefined){
      console.log('Pop Up Component Undefined');
    }
    // this.popupComponent!.passEntry.subscribe(() => {
    //   this.popupComponent.close();
    // });
    if(this.modal == undefined){
      console.log('Modal Component Undefined');
    }
  }
  
  handlePageChange(event: number): void {
    this.page = event;
    this.getSemuaPosts();
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`offset`] = page;
    }

    if (pageSize) {
      params[`limit`] = pageSize;
    }

    return params;
  }

  getSemuaPosts() {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.postsService.getAll(params, this.status).subscribe(
      (data: any) => {
        console.log(data);
        console.log(JSON.stringify(data));
        this.posts = data.article;
        this.count = data.total;
        this.jumlahData = data.jumlahData[0].count;
        console.log("jumlah Data");
        console.log(this.jumlahData);
        console.log("Posts");
        console.log(this.posts);
      },(error: any) => console.log(error)
    );
  }

  // Navigate
  updatePosts(id: any){
    this.router.navigate(['/Edit/'+id]);
  } 

  pesanSnackBar(pesan: any){
    this._snackBar.open(pesan, '', {
      duration: 3000
    });
  }

  popupHapusPosts(id: any){
    const judulModal = 'Hapus Posts';
    const bodyMessage = 'Apakah Anda yakin menghapus data dengan id ' + id + '?';
    const gambar = '';
    const statusButton = false;
    const statusGambar = false;
    const jenisFunction = 'posts';
    
    this.modal?.open(id, judulModal, bodyMessage, gambar, statusButton, statusGambar, jenisFunction);
    
  }

  statusPublish(){
    this.status = 'publish';
    this.getSemuaPosts();
  }

  statusDraft(){
    this.status = 'draft';
    this.getSemuaPosts();
  }

  statusTrash(){
    this.status = 'trash';
    this.getSemuaPosts();
  }

  

  


}
