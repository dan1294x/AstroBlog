import { a as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, c as createAstro, e as addAttribute, h as renderHead, g as renderSlot, i as renderScript } from './astro/server_Byh4m9F7.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> <a href="/tags/">Tags</a> </div>`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/components/Navigation.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/components/Hamburger.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Hamburger", $$Hamburger, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-3ef6ksr2": true })} </nav> </header>`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a>`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/components/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    { platform: "GitHub", username: "dan1294x" },
    { platform: "Twitter", username: "dan1294x" },
    { platform: "LinkedIn", username: "dan1294x" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Learn more about my projects on:
</p><ul data-astro-cid-sz7xmlte> ${socialLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": link.platform, "username": link.username, "data-astro-cid-sz7xmlte": true })} </li>`)} </ul> </footer>`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "C:/Users/Marianela/Documents/coding/astro-blog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/Marianela/Documents/coding/astro-blog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
