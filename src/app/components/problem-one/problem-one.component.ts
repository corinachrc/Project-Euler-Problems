import { Component } from '@angular/core';

@Component({
  selector: 'problem-one',
  templateUrl: './problem-one.component.html',
  styleUrls: ['./problem-one.component.css']
})
export class ProblemOneComponent {
  numbers:any[]
  solutionArray:any[]=[]
  sortedArray:any[]=[]
  sum:number=0;
  isDisplaying:boolean=false
  constructor() {
    this.numbers = Array(999).fill(1).map((x,i)=>i+1);

  }
  multiplesOf3(array:any[]){
    array.forEach(element => {
      if(element%3==0)
      this.solutionArray.push(element)
    });
  }
  multiplesOf5(array:any[]){
    array.forEach(element => {
      if((element%5==0)&&!(element%3==0))
      this.solutionArray.push(element)
    });
  }
  solve(){
    this.multiplesOf3(this.numbers)
    this.multiplesOf5(this.numbers)
    this.sortedArray=this.solutionArray.sort((n1,n2) => n1 - n2);
    this.sortedArray.forEach(element => {
      this.sum+=element
    });
      this.isDisplaying=true
  }
  hide(){
    this.isDisplaying=false
    this.solutionArray=[]
    this.sum=0
  }
}
