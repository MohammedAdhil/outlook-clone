import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent  implements OnInit{




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
    const localData = localStorage.getItem('sendObject');
    if(localData != null){
      this.sendItemArray = JSON.parse(localData)
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

  // draft

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

    let ind = this.sendItemArray.indexOf(this.sendItemArray[index]);
    if (ind > -1){
      this.sendItemArray.splice(ind, 1);
    }
  localStorage.setItem("sendObject", JSON.stringify(this.sendItemArray));
  }


}
