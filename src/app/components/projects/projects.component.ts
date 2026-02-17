import { Component, OnInit } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Docs-now',
      description: 'An AI-powered SaaS application that enables intelligent conversations with PDF documents. Built with Next.js 15, TypeScript, and advanced AI technologies including OpenAI, LangChain, and Pinecone vector database. Features include real-time streaming responses, semantic search, secure authentication via Kinde, subscription management with Stripe, and a comprehensive dashboard for document management. The application uses tRPC for type-safe APIs, Prisma for database management, and UploadThing for seamless file uploads.',
      image: 'assets/images/docs-now.png',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'tRPC', 'Prisma', 'OpenAI', 'LangChain', 'Pinecone'],
      liveUrl: 'https://docs-now.vercel.app',
      sourceUrl: '#'
    },
    {
      id: 2,
      title: 'Issue Tracker',
      description: 'A comprehensive full-stack issue tracking application developed with Next.js 15, TypeScript, and Prisma/MySQL. Features include Google OAuth authentication via NextAuth, dynamic dashboards with chart visualizations, advanced filtering, pagination, and complete CRUD operations. Tailwind CSS and Radix UI were utilized for a responsive and accessible UI, while React Query ensured efficient data fetching and state management.',
      image: 'assets/images/issue-tracker.png',
      technologies: ['Next.js 15', 'TypeScript', 'Prisma', 'Supabase', 'Tailwind CSS', 'NextAuth', 'React Query', 'Radix UI'],
      liveUrl: 'https://issuetracker005.vercel.app/',
      sourceUrl: 'https://github.com/Ghost-oo5/issue-tracker'
    },
    {
      id: 3,
      title: 'GameHub',
      description: 'A dynamic game discovery platform built with React.js, integrating the RAWG API to fetch and display popular games. Features include search functionality, genre-based filtering, infinite scrolling, and a responsive design achieved with Tailwind CSS and Chakra UI. React Query and Axios were employed for efficient data fetching.',
      image: 'assets/images/gamehub.png',
      technologies: ['React.js', 'Tailwind CSS', 'RAWG API', 'Chakra UI', 'React Query', 'Axios', 'TypeScript'],
      liveUrl: 'https://gamehub-new.vercel.app/',
      sourceUrl: 'https://github.com/Ghost-oo5/game-hub'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
