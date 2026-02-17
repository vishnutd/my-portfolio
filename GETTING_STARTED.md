# 🚀 Getting Started - Quick Start Guide

## Vishnu T D Portfolio - Angular 9 Recreation

This is a complete, pixel-perfect recreation of the portfolio website from https://abdulbasit-005.vercel.app/ built using Angular 9.

---

## ⚡ Quick Start (3 Steps)

### 1️⃣ Install Dependencies
```bash
cd portfolio-app
npm install
```

### 2️⃣ Start Development Server
```bash
npm start
```

### 3️⃣ Open Browser
Navigate to: **http://localhost:4200/**

That's it! 🎉

---

## 📁 What's Included

### Components (8 Total)
✅ **Header** - Sticky navigation with smooth scroll  
✅ **Hero** - Landing section with animated code snippet  
✅ **About** - Bio with statistics  
✅ **Experience** - Professional timeline  
✅ **Skills** - Tech stack showcase  
✅ **Projects** - Portfolio gallery  
✅ **Contact** - Form with validation  
✅ **Footer** - Links and copyright  

### Features
✅ Fully responsive (mobile, tablet, desktop)  
✅ Dark theme with gradient accents  
✅ Smooth scroll navigation  
✅ Form validation  
✅ Animated transitions  
✅ Modern SCSS styling  

---

## 🎨 Technologies Used

- **Angular**: 9.1.13
- **TypeScript**: 3.8.3
- **SCSS**: Modern styling
- **RxJS**: Reactive programming
- **Forms**: Reactive forms with validation

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **README.md** | Main documentation |
| **INSTALLATION.md** | Detailed setup guide |
| **PROJECT_STRUCTURE.md** | File structure & architecture |
| **CUSTOMIZATION_GUIDE.md** | How to customize everything |
| **GETTING_STARTED.md** | This file - Quick start |

---

## 🔧 Common Commands

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

---

## 📝 Customization Quick Links

### Change Your Info
1. **Name & Bio**: `src/app/components/about/about.component.html`
2. **Experience**: `src/app/components/experience/experience.component.ts`
3. **Skills**: `src/app/components/skills/skills.component.ts`
4. **Projects**: `src/app/components/projects/projects.component.ts`
5. **Contact**: `src/app/components/contact/contact.component.ts`

### Change Colors
Edit: `src/styles.scss`
```scss
:root {
  --accent-primary: #6366f1;   // Change this
  --accent-secondary: #8b5cf6; // Change this
}
```

### Add Images
1. Place images in: `src/assets/images/`
2. Reference in components: `'assets/images/your-image.png'`

---

## 🌐 Deploy to Production

### Vercel (Recommended)
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Netlify
1. Build: `npm run build`
2. Deploy folder: `dist/portfolio-app`

### GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --prod --base-href "https://username.github.io/repo/"
ngh --dir=dist/portfolio-app
```

---

## 🐛 Troubleshooting

### Port already in use?
```bash
ng serve --port 4300
```

### npm install fails?
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
rm -rf .angular
ng build
```

---

## 📖 Learn More

- **Full Documentation**: See `README.md`
- **Detailed Setup**: See `INSTALLATION.md`
- **Customization**: See `CUSTOMIZATION_GUIDE.md`
- **Architecture**: See `PROJECT_STRUCTURE.md`

---

## ✨ Project Highlights

### Exact Recreation Features
- ✅ Identical layout and structure
- ✅ Same dark theme with indigo/purple gradients
- ✅ Matching animations and transitions
- ✅ Responsive design patterns
- ✅ Code snippet display
- ✅ Timeline visualization
- ✅ Project cards with alternating layout
- ✅ Contact form with validation
- ✅ Smooth scroll navigation

### Code Quality
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ SCSS with CSS variables
- ✅ Responsive design principles
- ✅ Clean, maintainable code
- ✅ Follows Angular best practices

---

## 🎯 Next Steps

1. **Customize Content**: Update with your information
2. **Add Images**: Replace placeholders with your photos
3. **Test Thoroughly**: Check all sections and links
4. **Deploy**: Push to production
5. **Share**: Show off your portfolio!

---

## 💡 Pro Tips

1. **Test Mobile**: Always check responsive design
2. **Update Resume**: Keep your resume link current
3. **Real Projects**: Add actual project links
4. **Good Images**: Use high-quality project screenshots
5. **SEO**: Update meta tags in `index.html`

---

## 🤝 Support

If you need help:
1. Check the documentation files
2. Review Angular 9 docs: https://v9.angular.io/
3. Check browser console for errors
4. Verify all files are properly saved

---

## 📄 License

This project is created for portfolio demonstration purposes.

---

**Built with ❤️ using Angular 9**

Ready to make it yours? Start customizing! 🚀
