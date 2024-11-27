import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../product';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{

  products:product[] = [];
  prod:product = new product(1,'','',0,0);

  constructor(private service:DataService){

  }
  ngOnInit(): void {
    // this.fetchAllproducts()
    this.addProduct()
    // this.fetchAllproducts()
    this.modify()
    // this.fetchAllproducts()
    // this.deleteProduct(105)
    this.fetchAllproducts()

  }

  fetchAllproducts(){
    this.service.fetchAllProducts().subscribe( (data)=>{
      this.products= data;
    } );
  }
  addProduct():void{
    this.service.addProduct(new product(105,"nuke","death walk",1,15000)).subscribe( 
      (data) => {
        this.prod = data;
      }
    );
  }
  modify():void{
    this.service.modifyProduct(new product(105,"nik","verum walk",1,15000)).subscribe( 
      (data) => {
        this.prod = data;
      }
    );
  }

  deleteProduct(id:number):void{
    this.service.deleteProduct(id).subscribe(
      data => this.products = data
    )
  }

}
