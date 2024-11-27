import { Component } from '@angular/core';
import { Document } from '../Document';
@Component({
  selector: 'app-strawhats',
  templateUrl: './strawhats.component.html',
  styleUrls: ['./strawhats.component.css']
})
export class StrawhatsComponent {
  documents: Document[] = [];
  doc:Document = new Document('','','',true,false,true)

  addDocument() {

    this.documents.push({ ...this.doc});
    console.warn(this.documents)
  }

  // docSize:number=this.documents.length


  get DocSize():number{
    return this.documents.length;
  }

  removeDocument(index:number){
    this.documents.splice(index,1);
  }

  // isReadonly: boolean = true;
  // hiddencofirm:boolean = true;
  // disableedit:boolean = false
  makeEditable(index: number) {
    this.documents[index].isReadonly = false;
    this.documents[index].disableEdit = true;
    this.documents[index].hiddenConfirm = false;
  }

  makeNonEditable(index: number) {
    this.documents[index].isReadonly = true;
    this.documents[index].disableEdit = false;
    this.documents[index].hiddenConfirm = true;
    // this.documents[index].name = this.doc.name
    // this.documents[index].expiry = this.doc.expiry
    // this.documents[index].id = this.doc.id
  }
}
