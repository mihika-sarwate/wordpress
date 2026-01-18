# A TOWN LIMO - Premium Hero Section
## WordPress Integration Guide

---

## 📋 Project Overview

**Website Name:** A Town Limo  
**Industry:** Premium Luxury Limousine / Car Service  
**Location:** Atlanta, GA  
**File Created:** January 18, 2026

### What's Included
- ✓ Premium hero section with luxury design
- ✓ Responsive booking form (desktop/mobile optimized)
- ✓ 4-field trust badges for credibility
- ✓ Smooth animations & interactions
- ✓ Phone validation & auto-formatting
- ✓ Email validation
- ✓ Fully responsive (desktop, tablet, mobile)
- ✓ Fast loading & conversion-focused

---

## 🎨 Design Features

### Color Palette
- **Primary Gold:** #d4af37 (Premium accent)
- **Dark Background:** #1a1a1a, #2d2d2d (Luxury dark)
- **Text Light:** #ffffff, #e0e0e0 (High contrast)
- **Neutral:** #999-#b8b8b8 (Subtle details)

### Typography
- Headlines: 300-700 weight, high-end appearance
- Body: Clean, readable Segoe UI
- Letter-spacing: 0.5-3px for luxury feel

### Animations
- Fade-in-up on page load
- Button hover effects (lift & glow)
- Scroll indicator bounce
- Form focus transitions
- Toast notifications for user feedback

---

## 📦 Files Included

```
1. hero-section.html     - Main HTML structure
2. hero-style.css        - Complete styling (responsive)
3. hero-script.js        - Interactivity & validation
4. INTEGRATION_GUIDE.md  - This file
```

---

## 🚀 Integration Methods

### Option 1: WordPress Page Template (Recommended)

**Step 1:** Create a custom page template

1. In your WordPress theme, create a file:
   ```
   wp-content/themes/your-theme/page-hero-demo.php
   ```

2. Add this code to `page-hero-demo.php`:
   ```php
   <?php
   /*
   Template Name: A Town Limo Hero
   */
   ?>
   <!DOCTYPE html>
   <html <?php language_attributes(); ?>>
   <head>
       <meta charset="<?php bloginfo( 'charset' ); ?>">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>
       <?php wp_head(); ?>
       <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/hero-style.css">
   </head>
   <body>
       <?php
       // Include the hero section HTML
       include(get_template_directory() . '/hero-section.html');
       ?>
       <script src="<?php echo get_template_directory_uri(); ?>/hero-script.js"></script>
       <?php wp_footer(); ?>
   </body>
   </html>
   ```

**Step 2:** Upload files to your theme
- Copy `hero-section.html` → `wp-content/themes/your-theme/`
- Copy `hero-style.css` → `wp-content/themes/your-theme/`
- Copy `hero-script.js` → `wp-content/themes/your-theme/`

**Step 3:** Create the page in WordPress
- Go to WordPress Admin → Pages → Add New
- Set template to "A Town Limo Hero"
- Publish

---

### Option 2: Elementor Custom Section

**Step 1:** Install Elementor (if not already installed)
- WordPress Admin → Plugins → Add New
- Search for "Elementor"
- Install & Activate

**Step 2:** Create a custom Elementor widget

1. Create folder: `wp-content/plugins/town-limo-hero-widget/`

2. Create file: `wp-content/plugins/town-limo-hero-widget/plugin.php`
   ```php
   <?php
   /**
    * Plugin Name: A Town Limo Hero Widget
    * Description: Premium hero section for A Town Limo
    * Version: 1.0
    */

   if (!defined('ABSPATH')) exit;

   add_action('elementor/widgets/register', function($widgets_manager) {
       require_once(__DIR__ . '/widgets/town-limo-hero.php');
       $widgets_manager->register(new \Elementor\Town_Limo_Hero_Widget());
   });

   add_action('wp_enqueue_scripts', function() {
       wp_enqueue_style('town-limo-hero-style', plugin_dir_url(__FILE__) . 'hero-style.css');
       wp_enqueue_script('town-limo-hero-script', plugin_dir_url(__FILE__) . 'hero-script.js', [], '1.0', true);
   });
   ?>
   ```

3. Create widget file: `wp-content/plugins/town-limo-hero-widget/widgets/town-limo-hero.php`
   ```php
   <?php
   namespace Elementor;

   if (!defined('ABSPATH')) exit;

   class Town_Limo_Hero_Widget extends Widget_Base {

       public function get_name() {
           return 'town_limo_hero';
       }

       public function get_title() {
           return 'A Town Limo Hero';
       }

       public function get_icon() {
           return 'eicon-image';
       }

       protected function render() {
           include(plugin_dir_path(__FILE__) . '../hero-section.html');
       }
   }
   ?>
   ```

4. Upload plugin folder to `wp-content/plugins/`
5. Activate plugin in WordPress Admin

**Step 3:** Use in Elementor
- Create new page in Elementor
- Search for "A Town Limo Hero" widget
- Drag & add to page
- Publish

---

### Option 3: Custom HTML Block (Gutenberg/Block Editor)

1. Upload files to your theme folder (same as Option 1)

2. In any WordPress page, click "Add Block" → "Custom HTML"

3. Paste:
   ```html
   <link rel="stylesheet" href="/wp-content/themes/your-theme/hero-style.css">
   <!-- Include hero-section.html content here -->
   <script src="/wp-content/themes/your-theme/hero-script.js"></script>
   ```

---

## 📱 Responsive Breakpoints

The design is optimized for:
- **Desktop:** 1200px+ (full featured)
- **Tablet:** 768px - 1199px (optimized layout)
- **Mobile:** 480px - 767px (compact layout)
- **Small Mobile:** < 480px (minimal layout)

---

## ✨ Key Features

### Booking Form
- **Pickup Location** - Text input with autocomplete ready
- **Drop-off Location** - Text input with autocomplete ready
- **Date** - Date picker (minimum: today)
- **Time** - Time picker (24-hour format)
- **Vehicle Type** - Dropdown with options:
  - Cadillac Escalade (SUV)
  - Mercedes E-Class Sedan
  - Mercedes Sprinter Van
- **Phone** - Auto-formatted (123) 456-7890
- **Email** - Email validation

### CTAs
- **Book Now** - Primary action (gold button)
- **Get Quote** - Secondary action (outline button)

### Trust Elements
- ✓ Professional Drivers
- ✓ Luxury Fleet
- ✓ Guaranteed On-Time
- ✓ 24/7 Availability

### Contact Info
- Displays phone number for direct calls
- 24/7 support messaging

---

## 🔧 Customization Guide

### Change Company Name
Edit in `hero-section.html`:
```html
<h1 class="brand-name">YOUR COMPANY NAME</h1>
```

### Change Colors
Edit in `hero-style.css`:
```css
/* Change gold accent color */
.brand-name { color: #your-color; }
.btn-primary { background: linear-gradient(135deg, #your-color 0%, #your-color-dark 100%); }

/* Change dark background */
.hero-background { background: linear-gradient(135deg, #your-dark 0%, #your-dark-2 100%); }
```

### Change Phone Number
Edit in `hero-section.html`:
```html
<p class="form-note">📞 Questions? Call us: <strong>(404) 555-LIMO</strong> | 24/7 Support</p>
```

### Change Vehicle Options
Edit in `hero-section.html`:
```html
<select id="vehicle" name="vehicle" required>
    <option value="your-vehicle-1">Your Vehicle 1</option>
    <option value="your-vehicle-2">Your Vehicle 2</option>
</select>
```

### Change Trust Badges
Edit in `hero-section.html`:
```html
<div class="badge">
    <span class="badge-icon">✓</span>
    <span class="badge-text">Your Badge Text</span>
</div>
```

---

## 🔌 Form Submission Integration

The form currently shows notifications. To connect to a backend:

### Option A: WordPress REST API

In `hero-script.js`, modify `handleFormSubmit()`:
```javascript
function handleFormSubmit() {
    const formData = new FormData(document.getElementById('townLimoForm'));
    
    fetch('/wp-json/town-limo/v1/booking', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        showNotification('Booking confirmed!', 'success');
    })
    .catch(error => {
        showNotification('Error submitting booking', 'error');
    });
}
```

### Option B: Contact Form 7 Integration

Replace form with CF7 shortcode:
```html
[contact-form-7 id="123" title="A Town Limo Booking"]
```

### Option C: WPForms / Gravity Forms

Create a form and paste shortcode in the booking section.

---

## 📊 Performance Optimization

### CSS
- Minify hero-style.css for production
- Inline critical CSS in page header
- Use CSS variables for easy theming

### JavaScript
- Defer hero-script.js loading
- Minify for production
- Consider async loading

### Images
- Add actual background image (currently using gradient)
- Use optimized, WebP format
- Implement lazy loading if needed

### Caching
- Enable browser caching
- Use CDN for static files
- Consider WP Super Cache or similar

---

## 🧪 Testing Checklist

- [ ] Desktop browser (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browser (iOS Safari, Chrome Android)
- [ ] Tablet view (iPad, Android tablets)
- [ ] Form validation (all fields required)
- [ ] Phone number formatting (auto-format check)
- [ ] Email validation (reject invalid emails)
- [ ] Date picker (min date = today)
- [ ] Responsive layout (no horizontal scroll)
- [ ] Button hover states
- [ ] Form notifications (success/error)
- [ ] Speed test (PageSpeed Insights)
- [ ] Accessibility (WCAG 2.1 AA)

---

## 📞 Support & Customization

### Common Issues

**Issue:** Form not submitting
- **Solution:** Check browser console for errors. Ensure all fields are filled and validation passes.

**Issue:** Styling not applied
- **Solution:** Check CSS file path. Clear browser cache (Ctrl+F5).

**Issue:** Mobile looks broken
- **Solution:** Check viewport meta tag is present. Verify CSS media queries are working.

**Issue:** Buttons not clickable
- **Solution:** Check z-index values. Ensure no overlapping elements.

---

## 📝 SEO Considerations

Add meta tags in page header:
```html
<meta name="description" content="Premium luxury limousine and car service in Atlanta. Book your Cadillac Escalade, Mercedes sedan, or Sprinter van today.">
<meta name="keywords" content="limousine, luxury car service, Atlanta, Cadillac Escalade, Mercedes, car rental">
<meta property="og:title" content="A Town Limo - Premium Luxury Car Service in Atlanta">
<meta property="og:description" content="Experience unparalleled luxury with A Town Limo. Book your ride today.">
```

---

## ⚖️ License & Usage

This hero section template is designed for A Town Limo. For commercial use or modification, ensure all trademarks and branding are updated.

---

## 🎯 Next Steps

1. ✓ Review the hero section design
2. ✓ Choose integration method (Page Template, Elementor, or Custom HTML)
3. ✓ Upload files to your WordPress installation
4. ✓ Customize colors, text, and vehicle options
5. ✓ Test on desktop and mobile
6. ✓ Connect form to email/booking system
7. ✓ Optimize images and performance
8. ✓ Launch and monitor conversions

---

**Version:** 1.0  
**Last Updated:** January 18, 2026  
**Created for:** A Town Limo - Atlanta Premium Limousine Service
