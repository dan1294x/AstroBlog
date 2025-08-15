import { _ as __vite_glob_0_0 } from '../chunks/post-1_Brtau_hk.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_Do_y7_sU.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post-3_CP2nhEO-.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post-4_CxFLlUXt.mjs';
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Byh4m9F7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CU_8NAt8.mjs';
import { $ as $$BlogPost } from '../chunks/BlogPost_arD4-OwA.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const pageTitle = "My Astro Learning Blog";
  const allPosts = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "title": post.frontmatter.title, "url": post.url })}`)} </ul> ` })}`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/pages/blog.astro", void 0);

const $$file = "C:/Users/Marianela/Documents/coding/astro-blog/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Blog,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
