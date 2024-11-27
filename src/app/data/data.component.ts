import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../product';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{

  productId:number = 8484
  productDesc:string= "samsungs23"
  os:string="Android"
  price:number = 100000
  orderQtyNum:number =0
  avialableqty:number= 100
  available:boolean=true
  ismember:boolean=true
  freeshipping:string="green"
  isbuttonEnabled:boolean= this.orderQtyNum>this.avialableqty?true:false

  products:any[] =[
    {
      "productId" : 8484,
      "productDesc" : "samsungs23",
      "os":"Android",
      "price":100000,
      "orderQtyNum":0,
      "avialableqty": 100,
      "available":true,
      "freeshipping":"green"
    },
    {
      "productId" : 6477,
      "productDesc" : "iphone12",
      "os":"apple",
      "price":1000000,
      "orderQtyNum":0,
      "avialableqty": 100,
      "available":true,
      "freeshipping":"red"
    },
    {
      "productId" : 7392,
      "productDesc" : "Ipad",
      "os":"apple",
      "price":10000000,
      "orderQtyNum":0,
      "avialableqty": 100,
      "available":true,
      "freeshipping":"green"
    }

  ]

  products2:product[]=[];

  constructor(private service: DataService){  }
  ngOnInit(): void {
    this.getPRODUCTS();
  }
  getPRODUCTS(){
    this.products2=this.service.getProducts();
  }


  public placeOrder():void{
    if(this.orderQtyNum>this.avialableqty)
      this.available=false
    else
      this.available=true
    console.log("order placed",this.orderQtyNum)
  }

  onChange(e:any) {
    this.ismember= e.target.value
    console.log(this.ismember)
 }
 checkmember(){
  return this.ismember
 }
}
