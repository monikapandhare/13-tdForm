import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '13-tdForm';
  @ViewChild('signInForm')signInForm!:NgForm
  public secretQuesDefault : string = 'fvrtSubject'
  modeOfContact = [
    {
      moc : 'by email',
      id:123
    },
    {
      moc : 'by phone',
      id:124
    }
  ]
  // onSignUp(signInForm:NgForm){
  //   if(signInForm.valid){
  //     console.log(signInForm.value);
  //     signInForm.reset()
      
  //   }
    
  // }

  onSignUp(){
    if(this.signInForm.valid){
      console.log(this.signInForm.value);
      this.signInForm.reset()
      
    }
  }
}


