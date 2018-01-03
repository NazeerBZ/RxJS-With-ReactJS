import React from 'react';
import * as Rx from 'rxjs';

export default class App extends React.Component {

  check() {

    // var source = Rx.Observable.interval(1000).take(4);;

    // source.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log();
    //   })





    // var source = Rx.Observable.timer(4000,1000).take(4);;

    // source.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log();
    //   })





    // var source = Rx.Observable.range(56, 7);

    // source.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log();
    //   })





    // var source = Rx.Observable.interval(1000).take(10).map((item)=>{ return item*2 });

    // source.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log();
    //   })





    // var source = Rx.Observable.from(['nazeer', 'saud', 'adnan']).map((item)=>{ return item.toUpperCase() })
    // source.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log();
    //   })





    // var userList = [
    //   { name: 'nazeer', age: 20 },
    //   { name: 'saud', age: 22 },
    //   { name: 'adnan', age: 21 }
    // ]

    // var source = Rx.Observable.from(userList).pluck('name')

    // source.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log();
    //   }
    // )




    // var source = Rx.Observable.of('Hello').merge(Rx.Observable.of('World'))

    // source.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log();
    //   }
    // )





    // var source1 = Rx.Observable.interval(1000).map((item) => { return 'Merge1: ' + item })
    // var source2 = Rx.Observable.interval(3000).map((item) => { return 'Merge2: ' + item })

    // Rx.Observable.merge(source1, source2).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log();
    //   }

    // );





    // var source1 = Rx.Observable.range(0,5).map((item) => { return 'source1: ' + item })
    // var source2 = Rx.Observable.range(10, 5).map((item) => { return 'source2: ' + item })

    // Rx.Observable.concat(source1, source2).take(10).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log();
    //   }

    // );





    // var source = Rx.Observable.of('Hello').mergeMap((value) => { return Rx.Observable.of(value + ' Everyone ') })
    // source.subscribe(
    //   (data)=>{
    //     console.log(data);
    //   }
    // )




  }

  render() {

    return (
      <div>
        {/*<h1>Hello World</h1>*/}
        {this.check()}
      </div>
    );
  }
}
