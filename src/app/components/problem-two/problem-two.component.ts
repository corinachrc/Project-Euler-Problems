
import { Component } from '@angular/core';


@Component({
  selector: 'problem-two',
  templateUrl: './problem-two.component.html',
  styleUrls: ['./problem-two.component.css']
})
export class ProblemTwoComponent {
  numbers:any[];
  isPrime=false
  primeNumbers:number[]=[]
  toNumber:number=20
  productString="1"
  product:number=1
  power:number=1

  isDisplaying:boolean=false
  constructor() {
    this.numbers = Array(this.toNumber).fill(1).map((x,i)=>i+1);

  }
  checkIfPrime(num:number){
    let i
    for (i=2;i<num;i++){
      if(num%i==0){
        this.isPrime=false
        break;
      }else{
        this.isPrime=true
      }

  }
  return this.isPrime
}
  calculatePrimeNumbers(arr:any[]){
    this.primeNumbers.push(2)
    arr.forEach(element => {
      if(this.checkIfPrime(element)==true){
        this.primeNumbers.push(element)
      }
    })
  }
  calculateLCM(arr:number[]){
    arr.forEach(element => {
      for(let j=1;j<this.toNumber;j++)
        if(Math.pow(element,j)<this.toNumber){
        this.product=this.product*element
        this.power=j
        }
        if(this.power>1){
        this.productString=this.productString+" x "+element+"^"+this.power
        }else{
          this.productString=this.productString+" x "+element
        }
    })


  }
  solve(){
      this.calculatePrimeNumbers(this.numbers)
      this.calculateLCM(this.primeNumbers)
      this.isDisplaying=true
    }
  hide(){
    this.product=1;
    this.isDisplaying=false
    this.primeNumbers=[]
    this.productString="1"
  }
  }




