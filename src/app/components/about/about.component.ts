import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '3+', label: 'Global Products' },
    { value: '10+', label: 'Tech Mastered' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
