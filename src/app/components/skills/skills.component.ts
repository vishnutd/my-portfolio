import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  iconUrl: string; // Simple Icons CDN URL
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillRows: Skill[][] = [];

  // Using Simple Icons CDN: https://cdn.simpleicons.org/[slug]/000000
  // The /000000 forces black color so our CSS filter can recolor to red
  private rawSkills: Skill[] = [
    { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript/000000' },
    { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript/000000' },
    { name: 'HTML', iconUrl: 'https://cdn.simpleicons.org/html5/000000' },
    { name: 'CSS', iconUrl: 'https://cdn.simpleicons.org/css/000000' },
    { name: 'Angular', iconUrl: 'https://cdn.simpleicons.org/angular/000000' },
    { name: 'AngularJS', iconUrl: 'https://cdn.simpleicons.org/angular/000000' },
    { name: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/000000' },
    { name: 'Express', iconUrl: 'https://cdn.simpleicons.org/express/000000' },
    { name: 'PostgreSQL', iconUrl: 'https://cdn.simpleicons.org/postgresql/000000' },
    { name: 'Git', iconUrl: 'https://cdn.simpleicons.org/git/000000' },
    { name: 'Bootstrap', iconUrl: 'https://cdn.simpleicons.org/bootstrap/000000' },
  ];

  ngOnInit(): void {
    const rowSize = 5;
    this.skillRows = [];
    for (let i = 0; i < this.rawSkills.length; i += rowSize) {
      this.skillRows.push(this.rawSkills.slice(i, i + rowSize));
    }
  }
}