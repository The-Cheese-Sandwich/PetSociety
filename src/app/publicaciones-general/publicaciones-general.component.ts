import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-publicaciones-general',
  templateUrl: './publicaciones-general.component.html',
  styleUrls: ['./publicaciones-general.component.css']
})
export class PublicacionesGeneralComponent implements OnInit {

  publicaciones?: Post[]
  
  public isLoading = false
  private postsSub: Subscription; 

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    
    this.isLoading = true

    this.postsService.getPosts()

    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false
        this.publicaciones = posts.reverse();
        this.postsSub.unsubscribe()
      }); 

  }

}
