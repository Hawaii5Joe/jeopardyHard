import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class JeopardyService {

 
// variables
  categoryID;

// service calls - the urls were hitting to pull data back
  private getCategories: string = "http://jservice.io/api/categories?count=3&offset=";
  private getClues: string = "http://jservice.io/api/clues?category=";

//   old urls for specific categories
//  private categoryOneUrl: string = "http://jservice.io/api/clues?category=42";
//  private categoryTwoUrl: string = "http://jservice.io/api/clues?category=136";
//  private categoryThreeUrl: string = "http://jservice.io/api/clues?category=1114";



 constructor(private http: Http) { }

// method to get categories from the db via API, randomOffset will get us a random category, then on success(which is .map) we'll return 
// a json object 
 getCategory(randomOffset): Observable<any> {
  
     return this.http.get(this.getCategories + randomOffset)
        .map(result => {
          return result.json()
        })
  
   }
// method to get the question associted with the category above, it will retun on .map success a json object from the url with the corresponding
// id
   getClue(categoryID): Observable<any> {
    
       return this.http.get(this.getClues + categoryID)
          .map(result => {
            return result.json()
          })
    
     }





     

// DO NOT USE THE CODE BELOW - Clunky method with 3 seperate methods


//  getCategoryOneQuestionInfo(): Observable<any> {

//    return this.http.get(this.categoryOneUrl)
//       .map(result => {
//         return result.json()
//       })

//  }

//  getCategoryTwoQuestionInfo(): Observable<any> {
  
//      return this.http.get(this.categoryTwoUrl)
//         .map(result => {
//           return result.json()
//         })
  
//    }

//    getCategoryThreeQuestionInfo(): Observable<any> {
    
//        return this.http.get(this.categoryThreeUrl)
//           .map(result => {
//             return result.json()
//           })
    
//      }





}