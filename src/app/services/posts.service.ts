import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "../models/post.model";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/posts/";



@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>(
        BACKEND_URL
      )
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            title: post.title,
            description: post.description,
            image: post.image,
            creator: post.creator
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

  getPost(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      description: string;
      image: string;
      creator: string;
    }>(BACKEND_URL + id);
  }

  addPost(title: string, description: string, image: File) {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("description", description);
    postData.append("image", image);
    this.http
      .post<{ message: string, post: Post }>(BACKEND_URL, postData)
      .subscribe(responseData => {
        const post: Post = {
          id: responseData.post.id,
          title: title,
          description: description,
          image: responseData.post.image,
          creator: null
        }
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      }, err => {
        alert("No se pudo subir su puclicación, la extención de su imagen no es valida")
      });
  }

  updatePost(id: string, title: string, description: string, image: File | string) {
    let postData: Post | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
      postData.append("title", title);
      postData.append("description", description);
      postData.append("image", image);
    } else {
      postData = {
        id: id,
        title: title,
        description: description,
        image: image,
        creator: null
      };
    }
    this.http
      .put(BACKEND_URL + id, postData)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
        const post: Post = {
          id: id,
          title: title,
          description: description,
          image: "",
          creator: null
        };
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        window.location.reload();
      });
  }

  deletePost(id:string){
    this.http.delete(BACKEND_URL + id)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== id);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
      window.location.reload();
    });
  }
}