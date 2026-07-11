# SEO Implementation Documentation for geetanshgoyal.in

This document outlines the end-to-end Search Engine Optimization (SEO) setup configured for Geetansh Goyal's interactive portfolio website.

---

## 1. Primary Metadata Configuration
Configured inside [layout.tsx](file:///Users/geetanshgoyal/geetxnshgoyal/app/layout.tsx):
- **Title and Template**: Structured dynamic titles (`Geetansh Goyal — Full Stack Developer | GSoC 2026 openSUSE | ICPC Amritapuri Regionalist`) with template capability for subpages.
- **Description**: A keyword-rich summary emphasizing your core achievements: Google Summer of Code, openSUSE event-driven automation, ICPC Amritapuri Regionalist 2025, Newton School of Technology, and key projects (RetroOS, Instagram CLI).
- **Targeted Keywords**: Configured 80+ exact-match query keywords covering variations of your name, institutions, stack, roles, and open source involvement.

---

## 2. Rich Social Metadata (Open Graph & Twitter Cards)
To ensure link previews look premium and draw high click-through rates on platforms like LinkedIn, Twitter, and WhatsApp:
- **Open Graph (OG)**: Fully detailed URL, site name, locale, title, and descriptive tags pointing to your official page.
- **Social Preview Image**: Configured `/geetansh-goyal.jpg` (your actual photo) as the featured image for Twitter Cards and OG tags.
- **Twitter Cards**: Customized for large-image layouts linked to your handle `@geetxnshgoyal`.

---

## 3. JSON-LD Structured Data (Rich Snippets)
Implemented JSON-LD schemas inside the `<head>` of the application layout to enable Google Rich Results:
- **Person Schema**: Defines your professional identity, contact details, affiliation with *Newton School of Technology*, projects with *openSUSE*, status as a *Microsoft Student Ambassador*, and specific awards/skills.
- **WebSite Schema**: Identifies your canonical site domain `https://geetanshgoyal.in`.
- **ProfilePage Schema**: Explicitly tells Google's algorithms that this is your main professional profile.
- **Social Graph (`sameAs`)**: Explicitly links your domain with your verified social profiles (LinkedIn, GitHub, Instagram, Twitter) to cluster your search identity.

---

## 4. Google Image Search & Visibility Optimization
For your photo (`Geetansh Goyal.jpg`) to rank high and be associated with your name:
- **SEO-Optimized Image File**: Copied the original photo to `/public/geetansh-goyal.jpg` using a lowercase, hyphen-separated, keyword-dense filename.
- **Crawlable Image Element**: Added an invisible-but-crawlable `SEOBlock` containing:
  - An `<h1>` heading (vital for page hierarchy).
  - An `<Image>` component with complete `alt`, `title`, and structured properties.
  - A semantic `<figcaption>` detailing your profile info and Instagram/GitHub handles.
  - *Implementation note:* Google ignores hidden content using `display: none`. Therefore, we used CSS clip-rect (screen-reader accessibility style) to hide it visually from the Vintage OS UI while keeping it fully readable for search bots.

---

## 5. Crawler Assets
- **[robots.txt](file:///Users/geetanshgoyal/geetxnshgoyal/public/robots.txt)**: Explicitly allows search bots and references the dynamic XML sitemap.
- **[sitemap.ts](file:///Users/geetanshgoyal/geetxnshgoyal/app/sitemap.ts)**: Configured standard Next.js metadata sitemap generation.
- **[site.webmanifest](file:///Users/geetanshgoyal/geetxnshgoyal/public/site.webmanifest)**: Standardizes web application manifest signals for crawl validation.
