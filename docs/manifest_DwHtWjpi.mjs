import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, f as decodeKey } from './chunks/astro/server_Byh4m9F7.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Marianela/Documents/coding/astro-blog/","cacheDir":"file:///C:/Users/Marianela/Documents/coding/astro-blog/node_modules/.astro/","outDir":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/","srcDir":"file:///C:/Users/Marianela/Documents/coding/astro-blog/src/","publicDir":"file:///C:/Users/Marianela/Documents/coding/astro-blog/public/","buildClientDir":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/client/","buildServerDir":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/post-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-1","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-1.md","pathname":"/posts/post-1","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/post-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-2","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-2.md","pathname":"/posts/post-2","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/post-3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-3","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-3\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-3.md","pathname":"/posts/post-3","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/post-4/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-4","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-4\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-4.md","pathname":"/posts/post-4","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/posts\\/rss\\.xml\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/rss.xml.js","pathname":"/posts/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/posts/post-1.md",{"propagation":"none","containsHead":true}],["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/posts/rss.xml.js",{"propagation":"none","containsHead":true}],["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/posts/post-2.md",{"propagation":"none","containsHead":true}],["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/posts/post-3.md",{"propagation":"none","containsHead":true}],["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/posts/post-4.md",{"propagation":"none","containsHead":true}],["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Marianela/Documents/coding/astro-blog/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/posts/post-1@_@md":"pages/posts/post-1.astro.mjs","\u0000@astro-page:src/pages/posts/post-2@_@md":"pages/posts/post-2.astro.mjs","\u0000@astro-page:src/pages/posts/post-3@_@md":"pages/posts/post-3.astro.mjs","\u0000@astro-page:src/pages/posts/post-4@_@md":"pages/posts/post-4.astro.mjs","\u0000@astro-page:src/pages/posts/rss.xml@_@js":"pages/posts/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DwHtWjpi.mjs","C:/Users/Marianela/Documents/coding/astro-blog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.DTRqgujV.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Marianela/Documents/coding/astro-blog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","document.querySelector(\".hamburger\")?.addEventListener(\"click\",()=>{document.querySelector(\".nav-links\")?.classList.toggle(\"expanded\"),console.log(\"dingdong\")});"]],"assets":["/file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/about/index.html","/file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/blog/index.html","/file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/post-1/index.html","/file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/post-2/index.html","/file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/post-3/index.html","/file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/post-4/index.html","/file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/posts/rss.xml","/file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/tags/index.html","/file:///C:/Users/Marianela/Documents/coding/astro-blog/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"3dcm0t7rvPIpY1Vfc71gczTeyi2OipkNI+psizXfDTk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
