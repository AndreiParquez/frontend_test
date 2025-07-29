# Abenson Junior Front-End Developer Assessment

A responsive web application demonstrating modern front-end development skills through a bed selection interface with tabbed navigation and interactive elements.

## 📋 Assessment Overview

This project is a solution to the **Abenson Junior Front-End Developer Skill Assessment** - a web page design and development challenge that converts a Figma design to functional code using only HTML, CSS, and JavaScript with a mobile-first approach.

### 🎯 Assessment Requirements Met

- ✅ **Core Implementation**: HTML, CSS, and JavaScript only
- ✅ **Mobile-First Development**: Responsive design starting from mobile
- ✅ **Figma to Code Conversion**: Clean implementation of design specifications
- ✅ **Modern Techniques**: CSS Grid, Flexbox, ES6+ JavaScript
- ✅ **Accessibility**: Semantic HTML and keyboard navigation
- ✅ **Performance Optimization**: Lazy loading and efficient animations

## ✨ Key Features

- **📱 Mobile-First Design**: Responsive layout optimized for all devices
- **🎨 Figma-to-Code Conversion**: Pixel-perfect implementation of design specs
- **⚡ Interactive Elements**: Hover and focus effects on all interactive components
- **🔄 Smooth Animations**: Custom transitions and loading states
- **♿ Accessibility**: WCAG compliant with semantic HTML and keyboard navigation
- **🚀 Performance Optimized**: Lazy loading images and efficient animations

## 🎥 Demo Video

Reference implementation based on: [Assessment Video Sample](https://drive.google.com/file/d/1svdPOjEtDJutuMzG_BGhePwqQ2KSLhV6/view?usp=sharing)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best results)

### Installation & Setup

1. **Download the ZIP file** or clone the repository
2. **Extract** to your desired directory
3. **Open** the project in your code editor
4. **Launch** `index.html` in your browser

### Development Server (Recommended)

```bash
# Using Live Server (VS Code Extension)
# Right-click index.html → "Open with Live Server"

```

## 📁 Project Structure

```
abenson-frontend-assessment/
├── index.html              # Main HTML structure
├── main.js                # JavaScript functionality
├── style.css              # CSS styles and animations
├── README.md              # Project documentation
└── imgs/                  # Image assets
    ├── bed.jpg           # Sample bed image
    └── logo.png          # Loading animation logo
```

## 🛠️ Technical Implementation

### Core Technologies (Assessment Requirement)

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: ES6+ features without external dependencies
- **Mobile-First Approach**: Progressive enhancement from 320px up

### Architecture & Best Practices

#### Clean CSS Architecture
```css
/* BEM methodology for component styling */
.bed-item {}
.bed-item__image {}
.bed-item__title {}
.bed-item--featured {}
```

#### Accessibility Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG AA)

#### Performance Optimizations
- Lazy loading for images (`loading="lazy"`)
- CSS animations using `transform` and `opacity`
- Minimal layout shifts during content load
- Efficient DOM manipulation

### UI/UX & Animations

#### Interactive Elements
- **Hover Effects**: Smooth card elevations and image scaling
- **Focus States**: Clear visual indicators for keyboard navigation
- **Loading States**: Animated spinner during content loading
- **Transition Effects**: Custom CSS transitions for all state changes

#### Mobile-First Responsive Design
```css
/* Mobile base styles (320px+) */
.bed-grid { grid-template-columns: 1fr; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .bed-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .bed-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
}
```

## 🎨 Styling Features

- **Responsive Grid**: Auto-adjusting columns based on screen size
- **Hover Effects**: Smooth transitions and animations
- **Loading States**: Visual feedback during data loading
- **Modern Cards**: Clean design with shadows and rounded corners
- **Color Scheme**: Professional blue and gray palette

## 🔧 Customization

### Adding New Bed Data

To add new beds, modify the data arrays in `main.js`:

```javascript
const bedData = [
  {
    id: 1,
    name: "Your Bed Name",
    image: "your-image.jpg",
    description: "Bed description here",
    tags: ["tag1", "tag2", "tag3"]
  }
  // Add more beds...
];
```

### Adjusting Loading Times

Change the delay parameter in the `loadItems` function calls:

```javascript
loadItems({
  gridId: "bedGrid",
  data: bedData,
  delay: 1200, // Adjust this value (milliseconds)
  suffix: "Beds",
});
```

### Modifying Styles

The main styling can be customized in `style.css`:

- Grid layout: `.bed-grid`
- Card styling: `.bed-item`
- Tab buttons: `.tab-btn`
- Colors: CSS custom properties for easy theming

## 🌐 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ⚠️ Internet Explorer (Limited support)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Multi-column grid)
- **Tablet**: 768px - 480px (Responsive columns)
- **Mobile**: < 480px (Single column)

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Ensure images are in the `imgs/` folder
2. **Tabs not working**: Check browser console for JavaScript errors
3. **Styling issues**: Verify CSS file is properly linked
4. **Mobile responsiveness**: Test with browser dev tools device simulation

### Debug Mode

Open browser developer tools (F12) to:
- Check console for errors
- Inspect network requests
- Test responsive design
- Validate accessibility with Lighthouse

## � Assessment Evaluation Criteria

This project demonstrates proficiency in the following areas as required by Abenson:

### ✅ Best Practices
- Semantic HTML structure
- Modern CSS methodologies (BEM)
- ES6+ JavaScript features
- Clean, maintainable code
- Comprehensive commenting

### ✅ Responsiveness
- Mobile-first development approach
- Fluid grid systems
- Flexible media queries
- Touch-friendly interface elements

### ✅ Functionality
- Interactive tab navigation
- Dynamic content loading
- Smooth animations and transitions
- Error handling and loading states

### ✅ Performance
- Optimized images with lazy loading
- Efficient CSS animations
- Minimal JavaScript DOM manipulation
- Fast initial load times

### ✅ Code Quality
- Well-structured and organized
- Proper separation of concerns
- Consistent naming conventions
- Documented functions and components

### ✅ Completeness
- All requirements implemented
- Cross-browser compatibility
- Accessibility compliance
- Production-ready code

## 📦 Submission Package

This project includes:

- ✅ **Public GitHub Repository**: Complete source code
- ✅ **README Documentation**: Setup and technical details
- ✅ **ZIP File**: All project files ready for submission
- ✅ **Video Documentation**: Screen-recorded development process (optional)

## 🚀 Development Process

### Workflow Applied
1. **Mobile-First Design**: Started with 320px viewport
2. **Progressive Enhancement**: Added features for larger screens
3. **Component-Based Development**: Modular CSS and JS structure
4. **Performance Testing**: Lighthouse audits and optimization
5. **Cross-Browser Testing**: Verified compatibility across browsers
6. **Accessibility Validation**: WCAG compliance verification

## 📄 License

This project is submitted as part of the **Abenson Junior Front-End Developer Skill Assessment**. Educational and evaluation purposes only.

## 🏢 About Abenson

This assessment demonstrates readiness to contribute to Abenson's front-end development team with modern web technologies and best practices.

---

**Built for Abenson Assessment | Demonstrating Modern Front-End Development Skills**
