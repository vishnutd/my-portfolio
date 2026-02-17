# Installation & Setup Guide

## Complete Step-by-Step Installation

### Step 1: Prerequisites

Make sure you have the following installed on your system:

1. **Node.js** (version 12.x or 14.x)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (usually comes with Node.js)
   - Verify installation: `npm --version`

### Step 2: Project Setup

1. Navigate to the project directory:
   ```bash
   cd portfolio-app
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```
   
   This will install:
   - Angular 9.1.13 and all core packages
   - TypeScript 3.8.3
   - RxJS
   - Development tools and dependencies

### Step 3: Running the Application

Start the development server:
```bash
npm start
```

Or use Angular CLI directly:
```bash
ng serve
```

The application will be available at: **http://localhost:4200/**

### Step 4: Building for Production

Create a production build:
```bash
npm run build
```

Or with Angular CLI:
```bash
ng build --prod
```

The production files will be in the `dist/portfolio-app` directory.

## Project Features

### Components Created

1. **HeaderComponent** - Sticky navigation with smooth scroll
2. **HeroComponent** - Landing section with animated code snippet
3. **AboutComponent** - About section with statistics
4. **ExperienceComponent** - Timeline of professional experience
5. **SkillsComponent** - Tech stack organized by category
6. **ProjectsComponent** - Portfolio projects showcase
7. **ContactComponent** - Contact form with validation
8. **FooterComponent** - Footer with navigation and info

### Styling

- Dark theme with gradient accents (#6366f1, #8b5cf6)
- Fully responsive design (mobile, tablet, desktop)
- Custom SCSS with CSS variables
- Smooth animations and transitions
- Modern glassmorphism effects

### Features

- ✅ Smooth scroll navigation
- ✅ Mobile-responsive hamburger menu
- ✅ Form validation (contact form)
- ✅ Animated gradient backgrounds
- ✅ Interactive hover effects
- ✅ SEO-friendly structure

## Customization Guide

### 1. Update Personal Information

**About Section** (`src/app/components/about/about.component.ts`):
```typescript
// Update statistics
stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '20+', label: 'Global Projects' },
  { value: '10+', label: 'Tech Mastered' }
];
```

**Experience** (`src/app/components/experience/experience.component.ts`):
```typescript
// Add or modify experience entries
experiences: Experience[] = [
  {
    period: '(July 2025 – Present)',
    title: 'Your Job Title',
    company: 'Company Name',
    description: ['Point 1', 'Point 2']
  }
];
```

**Skills** (`src/app/components/skills/skills.component.ts`):
```typescript
// Add or remove skills
skills: Skill[] = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'React', category: 'Frontend' }
];
```

**Projects** (`src/app/components/projects/projects.component.ts`):
```typescript
// Add or modify projects
projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Description',
    image: 'path/to/image',
    technologies: ['Tech1', 'Tech2'],
    liveUrl: 'https://...',
    sourceUrl: 'https://github.com/...'
  }
];
```

### 2. Change Color Scheme

Edit `src/styles.scss`:
```scss
:root {
  --bg-primary: #0a0a0a;        // Main background
  --bg-secondary: #111111;      // Secondary background
  --bg-tertiary: #1a1a1a;       // Card backgrounds
  --text-primary: #ffffff;      // Main text
  --text-secondary: #a0a0a0;    // Secondary text
  --accent-primary: #6366f1;    // Primary accent color
  --accent-secondary: #8b5cf6;  // Secondary accent color
  --border-color: #2a2a2a;      // Border color
}
```

### 3. Add Images

Place your images in `src/assets/images/` and update the paths in components:

```typescript
// In projects.component.ts
image: 'assets/images/your-image.png'
```

### 4. Update Contact Information

Edit `src/app/components/contact/contact.component.ts`:
```typescript
contactInfo = [
  {
    type: 'Email',
    value: 'your-email@example.com',
    link: 'mailto:your-email@example.com'
  },
  {
    type: 'Phone',
    value: '+1234567890',
    link: 'tel:+1234567890'
  }
];
```

## Common Issues & Solutions

### Issue: `npm install` fails

**Solution**: 
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 4200 already in use

**Solution**:
```bash
# Use a different port
ng serve --port 4300
```

### Issue: Build errors

**Solution**:
```bash
# Clear Angular cache
rm -rf .angular

# Rebuild
ng build
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/portfolio-app` folder to Netlify

### Deploy to GitHub Pages

1. Install angular-cli-ghpages:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build and deploy:
   ```bash
   ng build --prod --base-href "https://yourusername.github.io/repository-name/"
   ngh --dir=dist/portfolio-app
   ```

## Development Tips

1. **Hot Reload**: The dev server automatically reloads on file changes

2. **Debugging**: Use browser DevTools and Angular DevTools extension

3. **Code Formatting**: Consider installing Prettier for consistent formatting

4. **Version Control**: Use Git to track changes

## Support

If you encounter any issues:
1. Check the Angular 9 documentation: https://v9.angular.io/
2. Review the README.md file
3. Check browser console for errors

## Additional Resources

- Angular 9 Docs: https://v9.angular.io/
- TypeScript Docs: https://www.typescriptlang.org/
- SCSS Guide: https://sass-lang.com/

---

Happy Coding! 🚀
