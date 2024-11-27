import { Component } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  prod: product = new product(0,'','',0,0)
  products: product[] = []
  onSubmit(){
    console.warn(this.prod)
    this.prodSize
    this.products.push({ ...this.prod })
    console.warn(this.products)
  }

  clear(){
    this.products.length = 0
  }

  get prodSize():number{
    return this.products.length
  }

  removeone(i:number){
    this.products.splice(i,1)
  }
}
