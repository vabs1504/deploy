import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // <== add the imports!
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 
  student:any='';
 
  display(student:any){
      console.log(student)
  }
  ngOnInit(): void {
   
    this.student=new FormGroup({
 
      firstname:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]*$')
       
      ])),
 
      lastname:new FormControl("",Validators.compose([
        Validators.required
       
      ])),
 
      age:new FormControl("",Validators.compose([
        Validators.required,
        Validators.min(18),
        Validators.max(60)
      ])),      
 
     
     })
  }
 
 
 
}