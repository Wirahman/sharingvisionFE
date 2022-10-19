// Angular Library
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// Clarity Design
import '@cds/core/forms/register.js';
import '@cds/core/input/register.js';
import '@cds/core/password/register.js';
import '@cds/core/button/register.js';
import { ClarityIcons } from "@clr/icons";
// import '@clr/icons';
// import '@clr/icons/shapes/essential-shapes';

// Component Library
import { PostsModule } from '../model/posts.module';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {
  posts: PostsModule = new PostsModule();

  formPosts = new FormGroup({
    title: new FormControl('',[Validators.required,Validators.minLength(20)]),
    content: new FormControl('',[Validators.required,Validators.minLength(200)]),
    category: new FormControl('',[Validators.required,Validators.minLength(3)]),
    status: new FormControl('',Validators.required,)
  });
  
  buttonSave = true;
  
  get title() {
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
    private router: Router,
    private postsService: PostsService,
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit(): void {

  }

  onCreatePosts() {
    this.postsService.createPosts(this.posts).subscribe(
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
