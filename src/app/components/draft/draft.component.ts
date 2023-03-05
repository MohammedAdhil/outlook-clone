import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  sendItemArray: any[] = []; 
  draftItemArray: any[] = []; 

  //setup local storage

  sendObj:any = {

    to: '',
    subject: '',
    message: ''
  };


  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('draftObject');
    if(localData != null){
      this.draftItemArray = JSON.parse(localData)
    }
  }

    // send

    onItemAdd(){
      this.sendItemArray.push(this.sendObj);
      localStorage.setItem('sendObject',JSON.stringify(this.sendItemArray))
      this.sendObj = {
      
        to: '',
        subject: '',
        message: ''
      };


    }
  
    //draft
  
    onItemDraft(){
      this.draftItemArray.push(this.sendObj);
      localStorage.setItem('draftObject',JSON.stringify(this.draftItemArray))
      this.sendObj = {

        to: '',
        subject: '',
        message: ''
      };
    }

     //delete

     onDelete(index:any){

      let ind = this.draftItemArray.indexOf(this.draftItemArray[index]);
      if (ind > -1){
        this.draftItemArray.splice(ind, 1);
      }
    localStorage.setItem("draftObject", JSON.stringify(this.draftItemArray));
    }



}
