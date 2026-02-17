import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'About', link: '#about' },
    { label: 'Experience', link: '#experience' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(event: Event, link: string) {
    event.preventDefault();
    const element = document.querySelector(link);
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
