import { Component, OnInit } from '@angular/core';
import { PracticeComComponent } from '../practice-com/practice-com.component';
import { PracticeService } from '../shared/practice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-com',
  imports: [PracticeComComponent,CommonModule],
  templateUrl: './parent-com.component.html',
  styleUrl: './parent-com.component.css'
})
export class ParentComComponent implements OnInit{
 childmsg ="";
 timerSetTochild = 300;
 timesUp!: boolean;
 constructor(private service: PracticeService){}

 ngOnInit(): void {
   this.service.setMessage("Hello from Parent");
 }

 timeCheck(eve:boolean){
  this.timesUp = eve;
 }
}
