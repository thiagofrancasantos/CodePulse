import { Injectable } from '@angular/core';
import { AddBlogPost } from '../model/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  createBlogPost(data: AddBlogPost): Observable<BlogPost>{
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/blogposts`, data);
  }

  getAllBlogPosts(): Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/blogposts`);
  }
}
