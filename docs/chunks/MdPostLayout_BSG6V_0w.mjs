import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderSlot } from './astro/server_Byh4m9F7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_CU_8NAt8.mjs';
/* empty css                          */

const $$Astro = createAstro("https://example.com");
const $$MdPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MdPostLayout;
  const { frontmatter } = Astro2.props;
  const tags = frontmatter.tags || [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-llkgxla6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="tags" data-astro-cid-llkgxla6>${tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-llkgxla6><p class="tag" data-astro-cid-llkgxla6>${tag}</p></a>`)}</div><p data-astro-cid-llkgxla6>Published on: ${frontmatter.pubDate.toString().slice(0, 10)}</p><p data-astro-cid-llkgxla6>Written by ${frontmatter.author}</p><img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")} data-astro-cid-llkgxla6>${renderSlot($$result2, $$slots["default"])}` })}`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/layouts/MdPostLayout.astro", void 0);

export { $$MdPostLayout as $ };
