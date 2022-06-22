import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrls: ['./mis-publicaciones.component.css']
})
export class MisPublicacionesComponent implements OnInit {

  publicaciones?: Post[];
  private postsSub: Subscription; 
  private userId :string;

  constructor(private userService: UsersService , private postsService : PostsService) { }

  ngOnInit(): void {
    this.userId = this.userService.getUserId();
    this.getPublis();
  }

  getPublis(){
    this.postsService.getPosts()
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.publicaciones = posts;
        this.postsSub.unsubscribe();
      })
      this.postsSub.add( () =>{
        this.publicaciones =  this.publicaciones.filter(p => p.creator == this.userId)
      });
  }
}

