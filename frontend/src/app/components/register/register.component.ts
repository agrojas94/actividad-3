
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-register', templateUrl: './register.component.html' })
export class RegisterComponent implements OnInit{
  form!: FormGroup; loading=false;
  constructor(private auth: AuthService, private router: Router){}
  ngOnInit(){ this.form = new FormGroup({ name:new FormControl('',Validators.required), email:new FormControl('',[Validators.required,Validators.email]), password:new FormControl('',[Validators.required,Validators.minLength(6)]) }); }
  submit(){ if(this.form.invalid) return; this.loading=true; this.auth.register(this.form.value).subscribe({ next: ()=>{ this.loading=false; alert('Registro exitoso'); this.router.navigate(['/login']); }, error: (e)=>{ this.loading=false; alert(e.error?.msg||'Error en registro'); } }); }
}
