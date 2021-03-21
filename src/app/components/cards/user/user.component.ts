import {Component, OnInit} from '@angular/core';
import {ajax} from 'rxjs/ajax';
import {map, switchMap, take} from 'rxjs/operators';
import get = Reflect.get;
import {from} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    const users$ = ajax({
      url,
      headers: {'Content-Type': 'application/json'},
      method: 'GET'
    });

    users$
      .pipe(
        switchMap(res => from(res.response))
      )
      .subscribe(res => console.log(res));
  }
}
