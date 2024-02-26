import { Component,OnInit} from '@angular/core';
import { DbservService } from '../dbserv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galary.component.html',
  styleUrl: './galary.component.css'
})
export class GalaryComponent  implements OnInit{
 
  constructor(public  dbs:DbservService){
  }
  myproducts:any=[]
  ngOnInit(): void {
    this.dbs.getAllProduct().subscribe(res=>{
      this.myproducts=res;
      console.log(res);
    },err=>{})
  }
 
}
