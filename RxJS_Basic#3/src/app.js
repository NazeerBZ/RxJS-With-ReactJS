import React from 'react';
import * as Rx from 'rxjs';

export default class App extends React.Component {

  check() {

    var List = document.getElementById('list');

    var registerUsers = [
      { userName: 'Nazeer', email: 'nazeer@g.com' },
      { userName: 'zain', email: 'nazeer@g.com' },
      { userName: 'malik', email: 'nazeer@g.com' },
    ]

    var userStream = Rx.Observable.from(registerUsers);
    userStream.subscribe(
      (data) => {
        // console.log(data);
        var li = document.createElement('li');
        li.innerHTML = '<h1>' + data.userName + '</h1>' + '<p>' + data.email + ' </p>';
        List.appendChild(li);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log();
      },
    )

    var set  = new Set(['Hello', 22, { userName: 'unknown' }]);

    var aryStream = Rx.Observable.from(set);
    aryStream.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log();
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
