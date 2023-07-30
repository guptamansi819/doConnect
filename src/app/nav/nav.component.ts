import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}
  @Input() links = new Array<string>;
  @Input() isHome:boolean = false;
  ngOnInit(): void {}
}
