import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../blog-post/model/blog-post.model';
import { BlogPostService } from '../../blog-post/services/blog-post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  blogs$?: Observable<BlogPost[]>;
  
  constructor(private blogPostService: BlogPostService){}
  
  ngOnInit(): void {
    this.blogs$ = this.blogPostService.getAllBlogPosts();
  }
}
