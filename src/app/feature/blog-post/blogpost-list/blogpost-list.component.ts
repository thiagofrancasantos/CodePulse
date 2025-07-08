import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})

export class BlogpostListComponent implements OnInit{

  blogPosts$?: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService){

  }

  ngOnInit(): void {
    // get all blogposts from api 
    this.blogPosts$ = this.blogPostService.getAllBlogPosts()
  }
  
}
