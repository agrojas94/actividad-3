import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: any[] = [];
  searchText = '';
  filtered: any[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.postsService.list().subscribe(data => {
      this.posts = data;
      this.filtered = data;
    });
  }

  filter() {
    const q = this.searchText.toLowerCase();
    this.filtered = this.posts.filter(p =>
      (p.title || '').toLowerCase().includes(q) ||
      (p.content || '').toLowerCase().includes(q)
    );
  }

  
  onImageError(event: any) {
    event.target.src = 'assets/default.jpg';
  }
}
