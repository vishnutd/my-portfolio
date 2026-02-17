import { Component, OnInit } from '@angular/core';

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      period: '(January 2022 – Present)',
      title: 'Senior Software Developer',
      company: 'Lutsel Technologies Pvt Ltd',
      description: [
        'Developed feature-rich Angular interfaces with reactive forms, dynamic components, and REST API integration.',
        'Engineered scalable backend services using Node.js and Express to power enterprise web applications.',
        'Designed normalized PostgreSQL schemas and optimized complex queries for high-performance data handling.',
        'Implemented secure authentication flows and structured backend architecture for maintainable systems.',
        'Collaborated closely with product stakeholders to deliver reliable and user-focused solutions.',
        'Improved application performance through API optimization, database tuning, and clean code practices.'
      ]
    },
    {
      period: 'September 2021 - December 2021',
      title: 'Odoo Developer Intern',
      company: 'Business Technology Research and Analytics Centre',
      description: [
        'Actively engaged in learning opportunities and mentorship programs, expanding knowledge of Odoo development best practices, Python programming, and software engineering principles.',
        'Actively participated in customizing Odoo modules to meet client requirements.',
        'Conducted thorough testing of Odoo modules to identify and rectify bugs, ensuring optimal performance, reliability, and adherence to coding standards.',
        'Integrating AI-powered features and automation workflows to enhance user productivity.',
        'Optimizing application performance and ensuring cross-browser compatibility.'
      ]
    },
    {
      period: 'January 2021 - May 2021',
      title: 'Process Associate',
      company: 'Aabasoft Technologies Pvt Ltd',
      description: [
        'Maintained excellent customer relationships by efficiently solving queries, complaints and issues',
        'Maintained extensive knowledge of product range to effectively answer customer queries on product specifications.',
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
