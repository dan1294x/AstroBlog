import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export { renderers } from '../../renderers.mjs';

const rss_xml = defineConfig({
  site: "https://example.com"
});

async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./post-1.md": () => import('../../chunks/post-1_Brtau_hk.mjs').then(n => n._),"./post-2.md": () => import('../../chunks/post-2_Do_y7_sU.mjs').then(n => n._),"./post-3.md": () => import('../../chunks/post-3_CP2nhEO-.mjs').then(n => n._),"./post-4.md": () => import('../../chunks/post-4_CxFLlUXt.mjs').then(n => n._)})),
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: rss_xml
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
