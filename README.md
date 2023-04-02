## Getting Started

First, install the dependencies by navigating to the project directory in your terminal and run
```bash
npm install
```
This will install all the required dependencies and place them in a folder called `node_modules` in the root directory.

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure
* `components` - Directory of Components Files
  * `404` - Components for 404 page
  * `about` - Components for about page
  * `contact` - Components for contact page
  * `headers` - All header components
  * `home` - Components for home page
  * `layout` - All components related to the site layout
  * `posts` - Components for the post page
  * `shared` - Components that are reused in multiple pages
  * `sidebar` - All sidebar components
  * `social` - Components for social media icons
* `config` - Directory of configuration files that contain site-wide data
* `content` - Directory of all Content markdown files
  * `authors` - Contains all markdown data files for authors
  * `categories` - Contains all markdown data files for post categories
  * `pages` - Contains all markdown data files for individual pages
  * `posts` - Contains all of the markdown data files for posts
  * `shared` - Contains all of the markdown data files for shared components
* `libs` - Directory of all library files
* `pages` - Directory of all pages
* `public` - Directory of images and external files
* `styles` - Contains the entry point CSS file for Tailwind CSS
* `utils` - Directory of javascript utility files

## Site Configuration
The `config/site.config.js` file contains default site data used across the site. You can change this data by editing the file

```javascript
export default {
  "metaData": {
    "title" : "BLP Media | NextJS /Craft Media Template",
    "description" : "BLP Media - a modern, stylish magazine, or news site.",
    "author" : "Ronan O Leary",
    "keyword" : "magazine, react, nextjs, tech blog",
    "ogImage" : "/images/ogimage.jpg"
  },
  "baseURL" : "https://blpmedia.vercel.app/",
  "logo" : "/images/blp-logo.png",
  "logoText" : "BLP Media",
  "favicon" : "/images/blp-icon-logo.png",
  "postPerPage" : 8,
  "copyright" : "© 2023 Busy Little Pixels. All rights reserved."
}
```

## Menu Links Configuration
You can configure the navbar and footer links by editing the `config/menus.js` file and changing the `name` and `link` values.

## Social Media Links
You can add or modify your social media links in the `config/social.js` file:

```javascript
export default [
  {
    name: 'facebook',
    href: '#'
  },
  {
    name: 'instagram',
    href: '#'
  },
  {
    name: 'twitter',
    href: '#'
  },
  {
    name: 'linkedin',
    href: '#'
  }
]
```

However, if you add a social media link make sure to add its corresponding icon in the `components/social` directory.

## Content
All of the content data is in markdown format. If you are not familiar with markdown, you should be ashamed. Nah, you can take a look at this pretty excellent [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) that provides a quick overview of all the Markdown syntax elements.

### Content Structure
All of the markdown files are located in the `content` directory. Project uses [`gray-matter`](https://github.com/jonschlinkert/gray-matter) to parse our YAML front matter and markdown content. All of the frontmatter data for each content file is located at the top of the file in between 3 hyphens. Below the frontmatter is the markdown content. 

### Adding new authors
You can add new or customize existing authors in the `content/authors` directory. Each author's file name is the slug for that particular author's page. For example, the author Summer Smith has a corresponding markdown file named `isabel-vaz.md` and an author page at `/authors/isabel-vaz`.

Every author has data in the following format:

```markdown
---
name: "Summer Smith"
image: "/images/authors/isabel-vaz.jpeg"
role: "Staff Writer"
social_links:
  - name: "twitter"
    url: "#"
  - name: "facebook"
    url: "#"
  - name: "instagram"
    url: "#"
  - name: "linkedin"
    url: "#"
---
Lorem ipsum dolor sit amet mauris quis phasellus ornare dui lectus. Laoreet habitasse eiusmod nulla odio tortor neque diam convallis morbi dolore molestie tellus faucibus pharetra.
```

All of the author images are stored in the `public/images/authors` directory. The markdown content below the frontmatter is the author's bio.

Similar to the site's social links, if you add a social media link make sure to add its corresponding icon in the `components/social` directory.

### Adding new posts

All of the posts are located in the `content/posts` directory. All of the posts have data in the following format:

```javascript
---
title: "15 Ways to Grow Your Startup"
description: "Lorem ipsum dolor sit amet tempus bendum labore laoreet.Hendrerit lobortis a leo curabitur faucibus sapien ullamcorper do labore odio."
image: "/images/posts/archive-02.jpeg"
date: "2023-04-05T16:56:47+06:00"
author: "Ronan O Leary"
time_to_read_in_minutes: 12
views: 6807
category: "Startup"
tags: ["Growth", "Tips", "List", "Idea"]
group: "Archived"
---
Aliqua venenatis gravida et urna molestie leo adipiscing dolore leo euismod quam. Aenean porta curabitur convallis pellentesque velit platea at neque phasellus.
```

All of the post images are stored in the `public/images/posts` directory. The markdown content below the frontmatter is the post content.

Every post has a category, author, and tags and is grouped by the `group` field for site organization. 

If you add a new author or category, make sure to create their corresponding markdown files in the `content/authors` and `content/categories` directories respectively.

### Page Data
The `/about`, `/contact` and `/privacy` pages have their corresponding data in the `content/pages/about.md`, `content/pages/contact.md` and `content/pages/privacy.md` markdown files respectively. 

### Newsletter Data

You can edit the newsletter section content and form data in the `content/shared/newsletter.md` markdown file.

## Tailwind CSS

This project uses the latest version of Tailwind CSS: v3.

Tailwind CSS and its dependencies were installed via npm as recommended by the official [Tailwind installation docs for next.js](https://tailwindcss.com/docs/guides/nextjs). If you are not familiar with the Tailwind CSS framework I would recommend you check out the [Tailwind documentation](https://tailwindcss.com/docs). 

You can find the `tailwind.config.js` and `postcss.config.js` files at the root of the directory. The entry point CSS file is located at `styles/globals.css`. This file contains the `@tailwind` directives and any additional CSS used in the template. Have tried to minimize custom CSS and only define a few custom classes for the hamburger menu in the navbar.

Tailwind allows you to customize what it generates using the `tailwind.config.js` file at the root of the project directory. For this theme, I defined a few extra utility classes. Have also added the paths to all of the template files to the `content` option to tree-shake unused styles and optimize your final build size. This template additionally uses 2 official Tailwind plugins (`@tailwindcss/aspect-ratio`, `@tailwindcss/typography`) to generate additional utility classes.

## Font
This template uses the `Roboto` Font family from the [Google Fonts Library](https://fonts.google.com/specimen/Roboto). The font is included in `/pages/_document.js` and leverages the [Automatic Webfont Optimizations](https://nextjs.org/docs/basic-features/font-optimization) by next.js.

## Images
All of the images for posts, categories, authors and website components are from [Unsplash](https://unsplash.com/).
