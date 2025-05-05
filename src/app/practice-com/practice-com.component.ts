import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { PracticeService } from '../shared/practice.service';
import { Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ShortenPipe } from '../shared/shorten.pipe';
import { FormControl, ReactiveFormsModule  } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CustomDialogComponent } from '../shared/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-practice-com',
  imports: [CommonModule, MatProgressSpinnerModule, ShortenPipe, ReactiveFormsModule],
  templateUrl: './practice-com.component.html',
  styleUrl: './practice-com.component.css'
})
export class PracticeComComponent implements OnInit,OnDestroy {

@Input() name: string = "guest";
status!: boolean;
displayMsgFromService! : string;
customPipevalue = "AngularRocks!";
intervalId!: any;
countdownTimer = "05:00";

readonly dialog = inject(MatDialog);
searchInput = new FormControl('');
@Input() timer!: number;
@Output() timeup = new EventEmitter();
constructor(private service: PracticeService,private router:Router){}
checkStatus(){
  this.status = !this.status;
}

ngOnInit(): void {
  this.service.getMessage().subscribe((msg)=> {
   this.displayMsgFromService = msg;
  });

 this.countDownStart();
this.searchInput.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged()).subscribe((val)=> console.log(val));
}

goToLogin() {
  this.router.navigate(['/']);
}

ngOnDestroy(): void {
  clearInterval(this.intervalId);
}

countDownStart(){

  this.intervalId = setInterval(()=>{
    if(this.timer > 0){
      this.timer--;
      this.updateDisplayTimer();
    }
    else this.timeup.emit(true);
  },1000);
}

updateDisplayTimer(){
  let minutes = Math.floor(this.timer / 60);
  let seconds = this.timer % 60;
  this.countdownTimer = `${this.addZero(minutes)}`+':'+ `${this.addZero(seconds)}`;
  return this.countdownTimer;
}

addZero(val:any){
return val < 10 ? '0'+ val : val;
}

openDialog() {
  this.dialog.open(CustomDialogComponent);
}

}
