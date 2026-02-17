import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  codeSnippet = {
    line1: "developer = {",
    line2: "  name: 'Vishnu T D',",
    line3: "  focus: 'Fullstack Mastery',",
    line4: "  skills: ['Angular', 'AngularJS', 'Node.js', 'PostgreSQL'],",
    line5: "  passionate: true,",
    line6: "  motto: \'Build with Purpose\'",
    line7: "};",
    line8: ".showCase();"
  };

  constructor() { }

  ngOnInit(): void {
    const y = {
      c : 99,
      d: 'jff'
    }
  }

  scrollToContact() {
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
