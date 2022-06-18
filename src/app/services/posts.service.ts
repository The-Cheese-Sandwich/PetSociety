import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";


import { Post } from "../models/post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>(
        "http://localhost:3000/api/posts"
      )
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            image: post.image,
            description: post.description
            
          };
        });
      }))
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }


  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(image: string, description: string) {
    const post: Post = { id: '', image: image, description: description };
    this.http
      .post<{ message: string, id: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        const id = responseData.id;
        post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }


  deletePost(id:string){
    this.http.delete("http://localhost:3000/api/posts/" + id)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== id);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
}