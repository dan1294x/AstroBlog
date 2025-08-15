import { _ as __vite_glob_0_0 } from '../chunks/post-1_Brtau_hk.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_Do_y7_sU.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post-3_CP2nhEO-.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post-4_CxFLlUXt.mjs';
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Byh4m9F7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CU_8NAt8.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Tags Index";
  const allPosts = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]);
  const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p data-astro-cid-os4i7owy>Welcome to the tags page. Here you can find a list of all tags used in the blog posts.</p><ul data-astro-cid-os4i7owy>${uniqueTags.map(
    (tag) => renderTemplate`<div class="tags" data-astro-cid-os4i7owy><p class="tag" data-astro-cid-os4i7owy><a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a></p></div>`
  )}</ul><p data-astro-cid-os4i7owy>Click on a tag to see all posts associated with it.</p>` })}`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/Marianela/Documents/coding/astro-blog/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
