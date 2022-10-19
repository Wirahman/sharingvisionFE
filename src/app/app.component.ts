import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sharing Vision';
  email: string | undefined | null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    
  }

  listsPosts(){
    this.router.navigate(['/List']);
  }

  addPosts(){
    this.router.navigate(['/Add']);    
  }

  previewPosts(){
    this.router.navigate(['/Preview']);    
  }
  
  
}
