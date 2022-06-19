import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";


import { Post } from "../models/post.model";
import { title } from "process";

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

  addPost(image: File, description: string) {
    const postData = new FormData();
    postData.append("description", description);
    postData.append("image", image);
    this.http
      .post<{ message: string, post: Post }>("http://localhost:3000/api/posts", postData)
      .subscribe(responseData => {
        const post: Post = {
          id: responseData.post.id,
          title: title,
          description: description,
          image: responseData.post.image
        }
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  updatePost(id: string, description: string, image: File | string) {
    let postData: Post | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
      postData.append("description", description);
      postData.append("image", image);
    } else {
      postData = {
        id: id,
        title: title,
        description: description,
        image: image
      };
    }
    this.http
      .put("http://localhost:3000/api/posts/" + id, postData)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
        const post: Post = {
          id: id,
          title: title,
          description: description,
          image: ""
        };
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
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