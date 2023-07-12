import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-array-function',
  templateUrl: './array-function.component.html',
  styleUrls: ['./array-function.component.scss']
})
export class ArrayFunctionComponent {

  subject = new Subject<number>();
  behaviorSubject = new BehaviorSubject<string>("uttam galoriya")
  numberArr: Observable<number> = from([4, 8, 11, 70, 4, 9, 10])
  numberArray: number[] = [7, 8, 11, 70, 4, 9, 10,]
  viewArr: number[] = []



  //javascript array method
  arrayMethod() {
    const array = [...this.numberArray]
    console.log(this.numberArray)
    //filter method
    let filterArray = array.filter((res) => res > 10)
    console.log("Filter Array greater then 10", filterArray)

    //map method
    let mapArray = array.map((res, index) => res * 10 * index)
    console.log("Map method", mapArray)

    //slice
    let sliceArray = array.slice(2, 5);
    console.log("sliceArray  index  start 2 to 4", sliceArray)

    //splice
    const spliceArray = array.splice(1, 3, 999)
    console.log('Spliced element ', array)

    //push
    array.push(...[6, 7]);
    console.log("array", array)

    //pop
    var poppedValue = array.pop();
    console.log(`Popped value ${poppedValue}`)

    //shift
    var shiftArray = array.shift()
    console.log(`${shiftArray} is shifted`, array)

    //unshift
    var unshiftArray = array.unshift(1, 2, 3)
    console.log(`${unshiftArray} is un shifted `, array)


  }



  //observable Method
  observalMethod() {
    //map and filter in rxjs
    let newArray$ = this.numberArr.pipe(
      filter((res: number) => res % 2 === 0),
      map((res: number) => res * 10)
    )

    //subscribe value

    newArray$.subscribe(
      (value: number) => { console.log(`Even number`, value) },
      (error: number) => (console.log(error)),
      () => (console.log('complete map and filter'))
    )

    //subject
    this.subject.subscribe((res: number) => console.log('subject', res))
    this.subject.next(1)
    this.subject.next(1)
    this.subject.next(1)

    //behaviorSubject 
    this.behaviorSubject.next('1');
    this.behaviorSubject.next('name')
    this.behaviorSubject.subscribe((res: string) => console.log('behaviorSubject ', res))

  }
}
