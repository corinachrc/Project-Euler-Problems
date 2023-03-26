import { Component } from '@angular/core';

@Component({
  selector: 'problem-three',
  templateUrl: './problem-three.component.html',
  styleUrls: ['./problem-three.component.css']
})
export class ProblemThreeComponent {
  number=""
  digits:any[]
  toNumber:number=1000
  maxProduct:number=1
  maxProductString=""
  isDisplaying:boolean=false

  constructor() {
    for(let j=0;j<this.toNumber;j++){
      let random=Math.floor(Math.random()*10)
      this.number=this.number.substring(0,this.number.length)+random
    }
    this.digits=this.number.split("");
  }
calculateMaxProductOf13AdjiacentDigit(arr:any[]){
  for(let i=0;i<arr.length-13;i++){
    let product=1
    let productString=""
    for (let j=i;j<i+13;j++){
      product=product*arr[j]
      if (productString==""){
        productString=arr[j]
      }else{
        productString=productString+" x "+ arr[j]
      }

    }
    if(this.maxProduct<product){
      this.maxProduct=product
this.maxProductString=productString
    }
  }
}



  solve(){
    this.calculateMaxProductOf13AdjiacentDigit(this.digits)
    this.isDisplaying=true
    }
  hide(){
    this.maxProduct=1;
    this.isDisplaying=false
    this.maxProductString=""
  }
}
