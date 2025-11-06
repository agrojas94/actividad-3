
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-create-post', templateUrl: './create-post.component.html' })
export class CreatePostComponent implements OnInit{
  form!: FormGroup; loading=false;
  constructor(private posts: PostsService, private router: Router){}
  ngOnInit(){ this.form = new FormGroup({ title:new FormControl('',Validators.required), content:new FormControl('',Validators.required), imageUrl:new FormControl('') }); }
  submit(){ if(this.form.invalid) return; this.loading=true; this.posts.create(this.form.value).subscribe({ next:()=>{ this.loading=false; alert('Post creado'); this.router.navigate(['/dashboard']); }, error:(e)=>{ this.loading=false; alert(e.error?.msg||'Error creando post'); } }); }
}
