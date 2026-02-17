# Vishnu T D - Portfolio Website (Angular 9)

This is an exact recreation of the portfolio website at https://abdulbasit-005.vercel.app/ built with Angular 9.

## Features

- 🎨 Modern, dark-themed UI with gradient accents
- 📱 Fully responsive design
- ⚡ Smooth scroll animations
- 🔥 Interactive components
- 📧 Contact form with validation
- 🎯 Clean and maintainable code structure

## Tech Stack

- **Angular 9.1.13** - Frontend framework
- **TypeScript** - Programming language
- **SCSS** - Styling
- **RxJS** - Reactive programming

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v12.x or v14.x)
- npm (v6.x or higher)

## Installation & Setup

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   cd portfolio-app
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   
   Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build for Production

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
portfolio-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/           # Navigation header
│   │   │   ├── hero/             # Hero section with code snippet
│   │   │   ├── about/            # About section with stats
│   │   │   ├── experience/       # Experience timeline
│   │   │   ├── skills/           # Skills showcase
│   │   │   ├── projects/         # Projects portfolio
│   │   │   ├── contact/          # Contact form
│   │   │   └── footer/           # Footer section
│   │   ├── app.component.*       # Root component
│   │   ├── app.module.ts         # App module
│   │   └── app-routing.module.ts # Routing configuration
│   ├── assets/                   # Static assets
│   ├── environments/             # Environment configurations
│   ├── styles.scss               # Global styles
│   └── index.html                # Main HTML file
├── angular.json                  # Angular CLI configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## Sections

1. **Hero Section** - Welcome message with animated code snippet
2. **About Section** - Personal introduction with statistics
3. **Experience Section** - Professional journey timeline
4. **Skills Section** - Tech stack categorized by type
5. **Projects Section** - Featured project showcases
6. **Contact Section** - Contact form and information
7. **Footer** - Navigation links and copyright

## Customization

### Update Personal Information

Edit the component TypeScript files to update:
- Personal details in `about.component.ts`
- Experience entries in `experience.component.ts`
- Skills in `skills.component.ts`
- Projects in `projects.component.ts`
- Contact information in `contact.component.ts`

### Modify Styles

Global styles are in `src/styles.scss`. Component-specific styles are in their respective `.scss` files.

Color scheme variables are defined in `styles.scss`:
```scss
--bg-primary: #0a0a0a;
--bg-secondary: #111111;
--bg-tertiary: #1a1a1a;
--text-primary: #ffffff;
--text-secondary: #a0a0a0;
--accent-primary: #6366f1;
--accent-secondary: #8b5cf6;
```

## Additional Commands

- **Lint the code**: `npm run lint`
- **Run tests**: `npm test`
- **Run e2e tests**: `npm run e2e`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for portfolio demonstration purposes.

## Contact

For any questions or suggestions, feel free to reach out:
- Email: rajaabdulbasit@gmail.com
- Phone: +923175972977

---

Built with ❤️ using Angular 9
