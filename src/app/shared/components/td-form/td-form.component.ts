import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
  @ViewChild('submitForm')submitForm!:NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(){
    console.log(this.submitForm.value);
    
    
  }
}
