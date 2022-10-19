// Angular Library
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// Clarity Design
import '@cds/core/forms/register.js';
import '@cds/core/input/register.js';
import '@cds/core/password/register.js';
import '@cds/core/button/register.js';
import { ClarityIcons } from "@clr/icons";

// Component Library
import { PostsModule } from '../model/posts.module';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {
  id: any;
  private sub: any;
  posts: PostsModule = new PostsModule();
  buttonSave = false;

  formPosts = new FormGroup({
    title: new FormControl('',[Validators.required,Validators.minLength(20)]),
    content: new FormControl('',[Validators.required,Validators.minLength(200)]),
    category: new FormControl('',[Validators.required,Validators.minLength(3)]),
    status: new FormControl('',Validators.required,)
  });
  
  get Title() {
    return this.formPosts.controls['title'];
  }

  get content() {
    return this.formPosts.controls['content'];
  }

  get category() {
    return this.formPosts.controls['category'];
  }

  get status() {
    return this.formPosts.controls['status'];
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   console.log("ID = " + this.id);
   console.log("Sub = " + this.sub);
    this.getDaftarPostsById(this.id);
  }

  getDaftarPostsById(id: any){
    console.log("ID yang akan diupdate = " + id);
    this.postsService.getDaftarPostsById(id).subscribe(
      (data: any) => {
        console.log(data);
        console.log(JSON.stringify(data));
        console.log("data.article");
        console.log(data.article);
        this.posts = data.article[0];
        console.log("this.posts");
        console.log(this.posts);
      },(error: any) => console.log(error)
    );
  }

  onUpdatePosts() {
    console.log("On Update Posts");
    console.log(this.posts);
    this.postsService.updatePosts(this.posts).subscribe(
      (data: any) => {
         console.log(data);

         this.router.navigate(['/List']);
      }
    );
    console.log('ok');
  }

  periksaAlert(event: any): void{
    console.log("Periksa alert");
    console.log('this.formPosts = ' + this.formPosts.invalid);
    if(this.formPosts.invalid){
      this.buttonSave = true;
    }else{
      this.buttonSave = false;
    }
    console.log('this.buttonSave = ' + this.buttonSave);
  }

  cancel() {
    this.router.navigate(['/List']);
  }

}
