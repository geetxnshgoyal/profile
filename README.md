# Geetansh Goyal - Portfolio Website

A modern, innovative portfolio website showcasing projects, experience, and skills. Built with pure HTML, CSS, and JavaScript with stunning animations and responsive design.

## 🌟 Features

- **Dynamic Project Display**: Automatically fetches and displays all GitHub repositories
- **Modern Animations**: Smooth transitions, typing effects, and scroll animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Sections**: 
  - Hero section with typing animation
  - About section with statistics
  - Filterable projects grid
  - Timeline-based experience section
  - Animated skill bars
  - Contact form
- **Dark Theme**: Eye-friendly dark color scheme with gradient accents
- **Performance Optimized**: Fast loading with minimal dependencies

## 🚀 Quick Start

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process required.

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a new repository named `geetanshgoyal.github.io`
2. Push these files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://geetanshgoyal.github.io`

### Option 2: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the portfolio folder
3. Get instant deployment with custom domain support

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow prompts for deployment

### Option 4: Custom Domain (geetanshgoyal.in)

For your custom domain:

1. Deploy using any of the above methods
2. In your domain registrar (e.g., GoDaddy, Namecheap):
   - Add A records pointing to your hosting provider's IP
   - Or add CNAME record pointing to your deployment URL
3. Update DNS settings to point to your deployed site

Example DNS Settings:
```
Type: A
Host: @
Value: [Your hosting IP]

Type: CNAME
Host: www
Value: [Your deployment URL]
```

## 🎨 Customization

### Update Personal Information

Edit `index.html`:
- Lines 70-90: Hero section text
- Lines 200-250: About section
- Lines 350-400: Experience timeline
- Lines 500-550: Contact information

### Add New Projects

Edit `script.js`:
- Update the `projectsData` array with your projects
- Or let it automatically pull from your GitHub API

### Change Colors

Edit `styles.css`:
- Lines 1-20: CSS variables (`:root`)
- Modify `--accent-color`, `--bg-primary`, etc.

### Add More Sections

Follow the existing pattern:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">
            <span class="title-number">06.</span>
            New Section
            <span class="title-line"></span>
        </h2>
        <!-- Your content here -->
    </div>
</section>
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🔧 Technologies Used

- HTML5
- CSS3 (with CSS Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, JetBrains Mono)

## 📊 Performance

- **Lighthouse Score**: 95+
- **Load Time**: < 1s on fast connections
- **No external dependencies** (except fonts)
- **Optimized animations** for smooth 60fps

## 🎯 Features in Detail

### Typing Animation
Dynamic typing effect showing multiple roles

### Project Filtering
Click technology tags to filter projects

### Smooth Scrolling
Seamless navigation between sections

### Mobile Menu
Responsive hamburger menu for mobile devices

### Contact Form
Ready-to-integrate contact form (add backend endpoint)

### Easter Egg
Try the Konami Code: ↑↑↓↓←→←→BA

## 📝 TODO / Future Enhancements

- [ ] Add blog section
- [ ] Integrate backend for contact form
- [ ] Add dark/light theme toggle
- [ ] Add more project details/modals
- [ ] Implement analytics
- [ ] Add testimonials section

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio

## 👤 Author

**Geetansh Goyal**
- GitHub: [@geetxnshgoyal](https://github.com/geetxnshgoyal)
- LinkedIn: [geetansh-goyal](https://linkedin.com/in/geetansh-goyal)
- Email: goyalgeetansh@gmail.com

---

Built with 💙 by Geetansh Goyal
