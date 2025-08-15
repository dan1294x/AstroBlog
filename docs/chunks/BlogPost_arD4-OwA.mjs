import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_Byh4m9F7.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(url, "href")}>${title}</a> </li>`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/components/BlogPost.astro", void 0);

export { $$BlogPost as $ };
