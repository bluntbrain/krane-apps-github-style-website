# GitHub-Style Website

A modern React application styled to mimic the GitHub interface, built with:

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Framer Motion

## Features

- GitHub-inspired UI components
- Responsive design
- Modern animations with Framer Motion
- TypeScript for type safety
- SEO-optimized blog with Markdown support

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Adding a New Blog Post

To add a new blog post to the website, follow these steps:

1. **Create a new Markdown file** in the `src/data/blog/` directory with a descriptive slug as the filename (e.g., `my-new-blog-post.md`).

2. **Add front matter** at the top of the file with the following format:

```markdown
---
title: "Your Blog Post Title"
slug: "my-new-blog-post"
date: "YYYY-MM-DD"
author: "Your Name"
excerpt: "A brief summary of what the blog post is about (will appear in listing cards)"
tags: ["tag1", "tag2", "tag3"]
image: "/images/blog/your-image.jpg"
seo:
  title: "Your Blog Post Title | Krane Apps"
  description: "A comprehensive SEO description for search engines (150-160 characters recommended)"
  keywords: ["keyword1", "keyword2", "keyword3", "keyword4"]
---

# Your Blog Post Title

Your blog post content here in Markdown format...
```

3. **Add a featured image** for the blog post in the `public/images/blog/` directory, making sure the filename matches the one referenced in the front matter.

4. **Update the data source** (optional, only if your post doesn't appear automatically):
   - If you're adding multiple blog posts at once, you might need to update the `blogPosts` array in `src/utils/blogUtils.ts`.

5. **Testing your blog post**:
   - Run the development server with `npm run dev`
   - Navigate to `http://localhost:5173/blog` to see your post in the listing
   - Click on your post to view the full article at `http://localhost:5173/blog/my-new-blog-post`

6. **Markdown features supported**:
   - Headings (# to ######)
   - Bold and italic text (**bold**, *italic*)
   - Lists (ordered and unordered)
   - Links [text](url)
   - Images ![alt text](image-url)
   - Code blocks with syntax highlighting (```language)
   - Blockquotes (> quote)
   - Tables

The blog system automatically handles:
- Generating SEO meta tags and structured data
- Creating responsive blog layouts
- Filtering by tags
- Search functionality

## License

MIT 