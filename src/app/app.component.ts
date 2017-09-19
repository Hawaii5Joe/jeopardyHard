import { Component, OnInit } from '@angular/core';
// hooking up the jeopardy service
import { JeopardyService} from './jeopardyservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

// random Int function to help generate different categories
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


// variables we need to use
  categoryInfo;
  cluesInfo;


  constructor(private jeopardyService: JeopardyService){}

// building the url to display category
  getDataFromService(){
    this.jeopardyService.getCategory(this.getRandomInt(0,1000))
        .subscribe(
          categoryInfo => {
            this.categoryInfo = categoryInfo;
          }
        )
      }
// building the url to display question
  getCategoryQuestion (selectedCategory){
    this.jeopardyService.getClue(selectedCategory)
    .subscribe(
      cluesInfo => {
        this.cluesInfo = cluesInfo[0];
        console.log(this.cluesInfo);
      }
    )
  }
  
  ngOnInit(){
    this.getDataFromService()
    
  }

// clearing the values of the question
  clearQuestion(){
    this.cluesInfo = {};

  }




// DO NOT USE CODE BELOW


    // category1;
  // category2;
  // category3;
  // question1;
  // question2;
  // question3;
  // userAnswer;
  // checkUserAnswer;
  // currentScore =0;

//   getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
  
//   getDataFromService1(){
//     let indexNumber= this.getRandomInt(0,100);
//     this.jeopardyService.getCategoryOneQuestionInfo()
//         .subscribe(
//           category1 => {
//             this.category1 = category1[indexNumber];
//           }
//         )
//       }
  
//   getDataFromService2(){
//     let indexNumber= this.getRandomInt(0,100);
//     this.jeopardyService.getCategoryTwoQuestionInfo()
//         .subscribe(
//           category2 => {
//             this.category2 = category2[indexNumber];
//           }
//         )
//       }

//   getDataFromService3(){
//     let indexNumber= this.getRandomInt(0,100);
//     this.jeopardyService.getCategoryThreeQuestionInfo()
//         .subscribe(
//           category3 => {
//             this.category3 = category3[indexNumber];
//           }
//         )
//       }

  

//   showCategoryOneQuestion (){
//     this.getDataFromService1(),
//     this.question1=this.category1

//   }

//   showCategoryTwoQuestion (){
//     this.getDataFromService2(),
//     this.question2=this.category2

//   }

//   showCategoryThreeQuestion (){
//     this.getDataFromService3(),
//     this.question3=this.category3

//   }















}
