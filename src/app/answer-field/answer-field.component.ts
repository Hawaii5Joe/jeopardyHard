// child component - Input allows child to have parental privileges, EventEmitter has Parent run stuff, Output
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-answer-field',
  templateUrl: './answer-field.component.html',
  styleUrls: ['./answer-field.component.css']
})
export class AnswerFieldComponent implements OnInit {

// bringing info from parent to child
  @Input() cluesInfo;

// child asking parent to run refreshCategories to get new categories
  @Output() refreshCategories = new EventEmitter<any>(); 
  @Output() clearQuestion = new EventEmitter<any>();

  // variables to use
  userAnswer;
  checkUserAnswer;
  currentScore=0;

  constructor() { }

  ngOnInit() {
  }

  // validate that the input and the answer are the same
checkAnswer(){
  if(!this.userAnswer){
    alert("submit an answer dumbass")
  }else{
    // checking user answer against db
    this.checkUserAnswer="FALSE!"
    if (this.userAnswer == this.cluesInfo.answer){
      this.checkUserAnswer= "CORRECT!"
      this.currentScore+=this.cluesInfo.value
      
    }
    
    // Parent on emit request of child will refresh, category fields, user answer, and question fields
    this.refreshCategories.emit();
    this.userAnswer=''
    this.clearQuestion.emit();
  }
  
    
  
   };















}
