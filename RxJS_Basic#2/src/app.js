import React from 'react';
import * as Rx from 'rxjs';

export default class App extends React.Component {

  check() {

    var btn = document.getElementById('btn');
    var clickStream = Rx.Observable.fromEvent(btn, 'click')
    clickStream.subscribe(
      (event) => {
        console.log(event.target.id);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      })


    var input = document.getElementById("input");
    var output = document.getElementById('output');

    var inputStream = Rx.Observable.fromEvent(input, 'keyup')
    inputStream.subscribe(
      (event) => {
        // console.log(event.target.value);
        output.innerHTML = event.target.value;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    )

    var moveMouseHere = document.getElementById('moveMouseHere');

    var mouseStream = Rx.Observable.fromEvent(moveMouseHere, 'mousemove')
    mouseStream.subscribe(
      (event) => {
        // console.log(event.target.value);
        output.innerHTML = 'X:'+ event.clientX + '  ' + 'Y' + event.clientY;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    )

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
