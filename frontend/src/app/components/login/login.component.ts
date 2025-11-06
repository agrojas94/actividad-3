
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-login', templateUrl: './login.component.html' })
export class LoginComponent implements OnInit{
  form!: FormGroup; loading=false;
  constructor(private auth: AuthService, private router: Router){}
  ngOnInit(){ this.form = new FormGroup({ email:new FormControl('',[Validators.required,Validators.email]), password:new FormControl('',[Validators.required,Validators.minLength(6)]) }); }
  submit(){ if(this.form.invalid) return; this.loading=true; this.auth.login(this.form.value).subscribe({ next: (res)=>{ this.loading=false; this.auth.saveToken(res.token); this.router.navigate(['/dashboard']); }, error: (e)=>{ this.loading=false; alert(e.error?.msg||'Error en login'); } }); }
}
