---
title: "Shipping this blog: a small deployment odyssey"
pubDate: 2025-08-15
description: "Routes, collections, GitHub Pages (docs folder!), and the tiny bugs that eat hours—shipped at last."
author: "Daniel Ruiz (elCoco)"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "A soft-glowing Astro star—shipping energy."
tags: ["astro", "deployment", "github-pages", "collections", "debugging", "tips"]
---

I finally shipped this blog after a few days of wrestling with both technical details and some “what even is the right approach?” moments. Perseverance helped—and the tutorial’s design didn’t hurt either (cheers to the Astro team’s guide). I learned a lot, and I’m writing it down so future-me doesn’t forget.

## What I changed (and why)

- **Custom routes.** I personalized the route setup to fit how I want URLs to look. It’s a small thing that makes the site feel mine.
- **GitHub Pages via `docs/`.** I’m publishing from the `docs` folder instead of the default branch deploys. That meant tweaking the build flow so the final static output lands in `docs/` and Pages serves from there. Feels neat and very portable.
- **Not Netlify this time.** The tutorial suggests Netlify as an option; I went with GitHub Pages to keep everything in one place.

<details>
<summary>Build flow I used</summary>

```bash
npm ci
npm run build          # generates /dist
rm -rf docs
cp -R dist docs        # Pages serves from /docs
```
</details>

## Pages → Collections (and the file that trolled me)

I refactored from “posts as pages” to **content collections**. Big win: a schema that catches mistakes early and nicer APIs to fetch content.

But the gremlin: a filename. I had `[...slugs].astro` when the route expected `slug`—or vice-versa. One single letter cost hours. It happens. Lesson re-learned:
- The **param name** in `getStaticPaths()` must **match** the dynamic route filename.
- When in doubt, log the `params` you return and sanity-check your URLs quickly.

## Debugging tip: verify your route parameter key

When generating pages from the collection, log the params you’re returning. A quick `console.table` makes it obvious if your key name doesn’t match the filename (e.g., `[...slug].astro` vs `params: { slugs: … }`).

```ts
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  const paths = posts.map((p) => ({
    params: { slug: p.slug }, // must match `[...slug].astro`
    props: { post: p },
  }));

  // Fast visual check: you should see rows like `{ slug: 'my-post' }`
  console.table(paths.map((p) => p.params));

  // Optional: assert-like guard during dev
  if (paths.some((p) => !('slug' in p.params))) {
    console.warn('[routes] Missing "slug" key in params; check your route filename or params object.');
  }

  return paths;
}
```

## `import.meta.glob` (pages) vs `getCollection()` (collections)

There are two common models for posts in Astro, and they shape how you fetch data and generate URLs.

### A) Pages model (`src/pages/...`) using `import.meta.glob`
- **Where files live:** `src/pages/posts/**/*.md`
- **Routing:** Each `.md` under `src/pages` **becomes a page automatically** (file-based routing).
- **Listing posts:** You glob the markdown files and each module exposes `frontmatter` and a generated `url`.

```ts
// Example inside a page component
const modules = import.meta.glob('../pages/posts/**/*.md', { eager: true });
const posts = Object.values(modules).map((mod: any) => ({
  title: mod.frontmatter.title,
  url: mod.url,                 // provided for page modules
  date: mod.frontmatter.pubDate
}));
```

**Pros:** Simple, automatic URLs.  
**Cons:** Less structure/validation across posts; content lives in `src/pages`, which couples content and routing.

### B) Collections model (`src/blog` + `astro:content`) using `getCollection()`
- **Where files live:** e.g., `src/blog/**/*.md` (outside `src/pages`).
- **Routing:** Markdown files do **not** become pages automatically. You define a dynamic route (e.g., `src/pages/posts/[...slug].astro`) and render collection entries.
- **Listing posts:** Fetch entries with `getCollection('blog')` and build the href from your chosen route pattern.

```ts
import { getCollection } from 'astro:content';

const entries = await getCollection('blog');
const links = entries.map((p) => ({
  title: p.data.title,
  href: `${import.meta.env.BASE_URL}posts/${p.slug}/` // matches your dynamic route
}));
```

**Pros:** Validated frontmatter (schema), better editor tooling, and cleaner separation of content from routing.  
**Cons:** You must create the route file and construct URLs yourself (easy to mix up param names—see debug tip above).

## What’s next?

- **Refresh the styling** with design concepts I’m currently studying.
- **Add a Projects section** so this doubles as a portfolio.
- Keep building—see where this little site wants to go.
