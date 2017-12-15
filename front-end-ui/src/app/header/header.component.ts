import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Vanessa Henson Conga Developer';
  subtitle = `Simple project to show why you sould hire me &#9786;`;

  toHTML(input) : any {
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
  }

  constructor() { }

  ngOnInit() {
  }

}
