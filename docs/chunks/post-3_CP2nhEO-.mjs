import { a as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML } from './astro/server_Byh4m9F7.mjs';
import 'kleur/colors';
import { $ as $$MdPostLayout } from './MdPostLayout_BSG6V_0w.mjs';

const html = () => "<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>";

				const frontmatter = {"layout":"../../layouts/MdPostLayout.astro","title":"My Third Blog Post","author":"El Coco","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"The Astro logo on a dark background with rainbow rays."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file = "C:/Users/Marianela/Documents/coding/astro-blog/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "   \r\n                                        \r\n                         \r\n               \r\n                                                                                \r\n      \r\n                                                    \r\n                                                                 \r\n                   \r\n                                                              \r\n   \r\nIt wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MdPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_2 as _ };
