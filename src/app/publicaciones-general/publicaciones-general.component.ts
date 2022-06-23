import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-publicaciones-general',
  templateUrl: './publicaciones-general.component.html',
  styleUrls: ['./publicaciones-general.component.css']
})
export class PublicacionesGeneralComponent implements OnInit, OnDestroy {

  publicaciones: Post[] = [];
  
  public isLoading = false
  private postsSub: Subscription; 

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    
    this.isLoading = true
    this.postsService.getPosts()

    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.publicaciones = [];
        this.isLoading = false
        //this.publicaciones = posts.reverse();
        posts.forEach((p) => {
          this.publicaciones.unshift(p);
        });

      }); 

  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
