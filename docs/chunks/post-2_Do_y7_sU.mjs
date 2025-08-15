import { a as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML } from './astro/server_Byh4m9F7.mjs';
import 'kleur/colors';
import { $ as $$MdPostLayout } from './MdPostLayout_BSG6V_0w.mjs';

const html = () => "<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>";

				const frontmatter = {"layout":"../../layouts/MdPostLayout.astro","title":"My Second Blog Post","author":"El Coco","description":"After learning some Astro, I couldn't stop!","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"The Astro logo on a dark background with a purple gradient arc."},"pubDate":"2022-07-08T00:00:00.000Z","tags":["astro","blogging","learning in public","successes"]};
				const file = "C:/Users/Marianela/Documents/coding/astro-blog/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "   \r\n                                        \r\n                          \r\n               \r\n                                                          \r\n      \r\n                                                   \r\n                                                                          \r\n                   \r\n                                                              \r\n   \r\nAfter a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!";
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

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_1 as _ };
