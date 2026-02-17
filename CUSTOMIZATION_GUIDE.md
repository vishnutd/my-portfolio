# Complete Customization Guide

## Quick Customization Checklist

- [ ] Update personal information (name, bio)
- [ ] Change contact details (email, phone)
- [ ] Modify work experience
- [ ] Update skills list
- [ ] Add your projects
- [ ] Customize color scheme
- [ ] Add your images/photos
- [ ] Update social media links
- [ ] Modify resume link

---

## 1. Personal Information

### Update Name and Title

**File**: `src/app/components/hero/hero.component.html`

```html
<!-- Change your name and title -->
<p class="hero-description">
  I'm <strong>Your Name</strong>, a professional <span class="highlight">Your Title</span><br>
  Your tagline or description here.
</p>
```

**File**: `src/app/components/hero/hero.component.ts`

```typescript
codeSnippet = {
  line1: "const developer = {",
  line2: "  name: 'Your Name',",  // Change this
  line3: "  focus: 'Your Focus',", // Change this
  line4: "  skills: ['Skill1', 'Skill2', 'Skill3'],", // Change this
  line5: "  passionate: true,",
  line6: "  motto: \"Your Motto\"", // Change this
  line7: "};",
  line8: "developer.showcase();"
};
```

---

## 2. About Section

### Update Bio

**File**: `src/app/components/about/about.component.html`

```html
<p class="about-description">
  <!-- Replace with your bio -->
  Your personal introduction and background here.
  Talk about your experience, skills, and passion.
</p>
```

### Update Statistics

**File**: `src/app/components/about/about.component.ts`

```typescript
stats = [
  { value: 'X+', label: 'Years Experience' },    // Update value
  { value: 'Y+', label: 'Projects Completed' },  // Update value
  { value: 'Z+', label: 'Technologies Learned' } // Update value
];
```

---

## 3. Work Experience

### Add/Edit Experience

**File**: `src/app/components/experience/experience.component.ts`

```typescript
experiences: Experience[] = [
  {
    period: '(Month Year – Present)',
    title: 'Your Job Title',
    company: 'Company Name',
    description: [
      'Responsibility or achievement 1',
      'Responsibility or achievement 2',
      'Responsibility or achievement 3',
      'Responsibility or achievement 4'
    ]
  },
  // Add more experience entries
  {
    period: '(Month Year – Month Year)',
    title: 'Previous Job Title',
    company: 'Previous Company',
    description: [
      'What you did here',
      'Another accomplishment'
    ]
  }
];
```

**Example**:
```typescript
{
  period: '(Jan 2024 – Present)',
  title: 'Senior Full Stack Developer',
  company: 'Tech Startup Inc.',
  description: [
    'Led development of microservices architecture serving 100k+ users',
    'Reduced API response time by 40% through optimization',
    'Mentored team of 5 junior developers',
    'Implemented CI/CD pipeline reducing deployment time by 60%'
  ]
}
```

---

## 4. Skills Section

### Update Your Tech Stack

**File**: `src/app/components/skills/skills.component.ts`

```typescript
skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  
  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  
  // Tools & Others
  { name: 'Docker', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'AWS', category: 'Tools' }
];
```

---

## 5. Projects Section

### Add Your Projects

**File**: `src/app/components/projects/projects.component.ts`

```typescript
projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Detailed description of your project. Explain what it does, the problem it solves, and the technologies used. Be specific about your role and contributions.',
    image: 'assets/images/project1.png', // Path to your project image
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'TypeScript',
      'Tailwind CSS'
    ],
    liveUrl: 'https://your-project-live-url.com',
    sourceUrl: 'https://github.com/yourusername/project-repo'
  },
  // Add more projects
  {
    id: 2,
    title: 'Another Project',
    description: 'Another project description...',
    image: 'assets/images/project2.png',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    liveUrl: 'https://project2-url.com',
    sourceUrl: 'https://github.com/yourusername/project2'
  }
];
```

**Complete Example**:
```typescript
{
  id: 1,
  title: 'E-Commerce Platform',
  description: 'A full-featured e-commerce platform with real-time inventory management, payment processing via Stripe, user authentication, product search and filtering, admin dashboard, and order tracking. Built to handle 10,000+ concurrent users with 99.9% uptime.',
  image: 'assets/images/ecommerce-platform.png',
  technologies: [
    'Next.js',
    'TypeScript',
    'Prisma',
    'PostgreSQL',
    'Stripe',
    'Tailwind CSS',
    'Redis',
    'AWS S3'
  ],
  liveUrl: 'https://my-ecommerce-platform.com',
  sourceUrl: 'https://github.com/yourusername/ecommerce-platform'
}
```

---

## 6. Contact Information

### Update Contact Details

**File**: `src/app/components/contact/contact.component.ts`

```typescript
contactInfo = [
  {
    type: 'Email',
    value: 'your.email@example.com',        // Your email
    link: 'mailto:your.email@example.com'   // Your email
  },
  {
    type: 'Phone',
    value: '+1 (234) 567-8900',            // Your phone
    link: 'tel:+12345678900'               // Your phone
  },
  {
    type: 'Location',
    value: 'Your City, Country',           // Your location
    link: '#'
  }
];
```

### Update Social Links

```typescript
socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',      // Your GitHub
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',  // Your LinkedIn
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourhandle',       // Your Twitter
    icon: 'twitter'
  },
  // Add more social links as needed
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourhandle',
    icon: 'instagram'
  }
];
```

---

## 7. Resume Link

### Update Resume Download Link

**File**: `src/app/components/hero/hero.component.html`

```html
<a href="YOUR_RESUME_LINK_HERE" 
   target="_blank" 
   class="btn-secondary">Get Resume</a>
```

**Options**:
1. **Google Drive**: Share your resume and use the shareable link
2. **Dropbox**: Use public Dropbox link
3. **Local file**: Place in `assets/` folder
   ```html
   <a href="assets/resume.pdf" target="_blank" class="btn-secondary">Get Resume</a>
   ```

---

## 8. Color Scheme

### Change Theme Colors

**File**: `src/styles.scss`

```scss
:root {
  // Background colors
  --bg-primary: #0a0a0a;      // Main dark background
  --bg-secondary: #111111;    // Slightly lighter
  --bg-tertiary: #1a1a1a;     // Card backgrounds
  
  // Text colors
  --text-primary: #ffffff;    // Main text
  --text-secondary: #a0a0a0;  // Secondary text
  
  // Accent colors (gradient)
  --accent-primary: #6366f1;   // Indigo
  --accent-secondary: #8b5cf6; // Purple
  
  // Borders
  --border-color: #2a2a2a;
}
```

**Popular Color Schemes**:

1. **Blue Theme**:
```scss
--accent-primary: #3b82f6;   // Blue
--accent-secondary: #60a5fa; // Light Blue
```

2. **Green Theme**:
```scss
--accent-primary: #10b981;   // Green
--accent-secondary: #34d399; // Light Green
```

3. **Red/Pink Theme**:
```scss
--accent-primary: #ef4444;   // Red
--accent-secondary: #ec4899; // Pink
```

4. **Orange Theme**:
```scss
--accent-primary: #f59e0b;   // Orange
--accent-secondary: #fbbf24; // Amber
```

---

## 9. Adding Images

### Step 1: Add Images to Assets

Place your images in: `src/assets/images/`

Recommended images:
- `profile.jpg` - Your photo
- `project1.png` - Project screenshots
- `project2.png`
- `project3.png`

### Step 2: Update Image References

**Profile Image** (`src/app/components/about/about.component.html`):
```html
<!-- Replace the placeholder with your image -->
<img src="assets/images/profile.jpg" alt="Your Name" class="profile-image">
```

**Project Images** (`src/app/components/projects/projects.component.ts`):
```typescript
projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    image: 'assets/images/project1.png', // Your image path
    // ... other properties
  }
];
```

---

## 10. Meta Tags and SEO

### Update Meta Tags

**File**: `src/index.html`

```html
<head>
  <meta charset="utf-8">
  <title>Your Name | Portfolio</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="Your portfolio description - Full Stack Developer specializing in...">
  <meta name="keywords" content="your, keywords, here, web developer, full stack">
  <meta name="author" content="Your Name">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yourwebsite.com/">
  <meta property="og:title" content="Your Name | Portfolio">
  <meta property="og:description" content="Your description">
  <meta property="og:image" content="https://yourwebsite.com/preview.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yourwebsite.com/">
  <meta property="twitter:title" content="Your Name | Portfolio">
  <meta property="twitter:description" content="Your description">
  <meta property="twitter:image" content="https://yourwebsite.com/preview.png">
  
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
```

---

## 11. Footer Information

### Update Footer

**File**: `src/app/components/footer/footer.component.html`

```html
<div class="footer-brand">
  <div class="footer-logo">
    <span class="logo-text">Your Name</span>
  </div>
  <p class="footer-tagline">
    Your tagline or brief description here.
  </p>
</div>
```

---

## 12. Custom Animations

### Add Custom Animation

**File**: `src/styles.scss`

```scss
@keyframes yourAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.your-element {
  animation: yourAnimation 0.6s ease-out;
}
```

---

## 13. Testing Your Changes

After making changes:

1. **Save all files**
2. **Check the browser** - Changes should auto-reload
3. **Test on mobile** - Use browser dev tools
4. **Validate forms** - Test the contact form
5. **Check links** - Ensure all links work
6. **Test navigation** - Verify smooth scrolling

---

## 14. Common Customization Patterns

### Adding a New Section

1. Generate component:
```bash
ng generate component components/new-section
```

2. Add to app.component.html:
```html
<app-new-section></app-new-section>
```

3. Add navigation link in header.component.ts:
```typescript
navItems = [
  // ... existing items
  { label: 'New Section', link: '#new-section' }
];
```

### Changing Fonts

**File**: `src/index.html`
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

**File**: `src/styles.scss`
```scss
body {
  font-family: 'Poppins', sans-serif;
}
```

---

## Quick Reference: Files to Customize

| What to Change | File Location |
|---------------|---------------|
| Name & Title | `hero.component.ts`, `hero.component.html` |
| Bio | `about.component.html` |
| Stats | `about.component.ts` |
| Experience | `experience.component.ts` |
| Skills | `skills.component.ts` |
| Projects | `projects.component.ts` |
| Contact Info | `contact.component.ts` |
| Colors | `src/styles.scss` |
| Social Links | `contact.component.ts` |
| Resume Link | `hero.component.html` |
| Footer | `footer.component.html` |

---

Remember to save all files and check the browser for your changes!
