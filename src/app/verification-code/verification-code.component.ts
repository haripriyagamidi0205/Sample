import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {
  isDisplay:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onCodeSubmit(){
    this.isDisplay=true;
  }

}
