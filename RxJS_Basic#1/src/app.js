import React from 'react';
import Rx from 'rxjs/Rx';

export default class App extends React.Component {
  
  check() {
 
    //Basic Example One
    // Rx.Observable.of('Hello World').subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('completed');
    //   })

    //Basic Example Two
    // Rx.Observable.from([1,2,3,4,5,6,7]).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('completed');
    //   })

    //Basic Example Three
    var btn = document.getElementById('btn');
    Rx.Observable.fromEvent(btn, 'click').subscribe(
      (event) => {
        console.log(event.target.id);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      })

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
